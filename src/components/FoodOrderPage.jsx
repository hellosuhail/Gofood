import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodOrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, price } = location.state || {};

  if (!name || !price) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 font-semibold">No item selected.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 btn btn-error"
        >
          Go Back
        </button>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    Name: '',
    number: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async (e) => {
    e.preventDefault();

    const { Name, number, address, email } = formData;

    if (!Name || !number || !address || !email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const orderDetails = { ...formData, itemName: name, itemPrice: price };
      const response = await axios.post('http://localhost:5000/api/order', orderDetails);
      console.log('Order placed:', response.data);
      navigate('/pay');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Order Form</h1>

      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded shadow">
        {/* Input fields */}
        <fieldset>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your name"
          />
        </fieldset>

        <fieldset>
          <label className="block text-sm font-medium mb-1">Phone Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your phone number"
          />
        </fieldset>

        <fieldset>
          <label className="block text-sm font-medium mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Delivery address"
          />
        </fieldset>

        <fieldset>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Your email"
          />
        </fieldset>

        {/* Order Summary */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <p><strong>Product:</strong> {name}</p>
          <p><strong>Price:</strong> ₹{price}</p>
        </div>

        <button onClick={handleNext} className="btn btn-primary w-full mt-4">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
export default FoodOrderPage;