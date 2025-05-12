import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import { Routes ,Route} from 'react-router-dom'
import Product from './components/Product'
import About from './components/About'
import FoodOrderPage from './components/FoodOrderPage'
import PaymentPage from './components/Payment'
import Login from './components/Login'
import Contact from './components/Conatact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Home />} />
      <Route path="/food-order" element={<FoodOrderPage />} />
      <Route path="/pay" element={<PaymentPage />} />
      <Route path="/log" element={<Login />} />
     </Routes>

   
   <Footer/>
    </>
  )
}

export default App
