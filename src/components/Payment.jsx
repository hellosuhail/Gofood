import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PaymentPage = () => {
  const navigate = useNavigate()
  const [upiId, setUpiId] = useState('')
  const [error, setError] = useState('')

  const handlePayment = async () => {
    const upiRegex = /^[\w.\-]{2,}@[a-zA-Z]{3,}$/

    if (!upiId) {
      setError('Please enter your UPI ID.')
      return
    } else if (!upiRegex.test(upiId)) {
      setError('Please enter a valid UPI ID (e.g. name@bank).')
      return
    }

    try {
      setError('')
      
      // 1. Create Razorpay order from backend
      const res = await axios.post('https://gofood-backend-mocha.vercel.app/api/payment', {
        amount: 500  // e.g. ₹500
      })

      const { id: order_id, amount, currency } = res.data

      // 2. Open Razorpay Checkout
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual key
        amount,
        currency,
        name: 'My App',
        description: 'Test Transaction',
        order_id,
        handler: function (response) {
          // Success: You can verify payment on backend
          console.log('Payment success:', response)
          navigate('/confirmation')
        },
        prefill: {
          name: 'User',
          email: 'user@example.com',
          contact: '9999999999',
          method: 'upi',
          upi: {
            vpa: upiId
          }
        },
        theme: {
          color: '#3399cc'
        }
      }

      const razor = new window.Razorpay(options)
      razor.open()

    } catch (err) {
      console.error('Payment error:', err)
      setError('Failed to initiate payment. Please try again.')
    }
  }

  return (
    <div className="px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-4">UPI Payment</h2>

        <fieldset className="w-full">
          <legend className="text-sm font-medium mb-1">Enter your UPI ID</legend>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="e.g. john.doe@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </fieldset>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => navigate('/food-order')}
            className="btn btn-outline"
          >
            Back
          </button>
          <button onClick={handlePayment} className="btn btn-primary">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
