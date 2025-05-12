import React, { useEffect, useState } from 'react'
import data from '/public/data.json'
import Card from './Caed'
import Banner from './Banner'
import { Link } from 'react-router-dom'
const Product = () => {
  const [products, setProducts] = useState([])

useEffect(() =>{
  setProducts(data)
},[setProducts])

// console.log(products)
  return (
    <div className="w-full">
      <Banner
      title={<p className="text-3xl m-2   animate-fade-in">Top Selling</p>} 
      subTitle={ <h1 className="font-bold ml-10 text-red-500 text-3xl  leading-tight animate-slide-up">Kitchen Products</h1>}
      button={<p className="text-3xl m-2 animate-fade-in ">Flat 25% Discount</p>}
      />

      {div}
       


    <h1 className="text-3xl ml-20 mt-8">hello</h1>
   <div className="md:flex block ml-12">
    <div className="w-[20%] h-[60vh] overflo\  lg:block m-4">
   
    <ul className="menu  border-1 border-gray-300 h-[55vh] w-full min-h-full  p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>


<h1 className="text-3xl ml-20 mt-8">hello</h1>

   
    <ul className="menu  border-1 border-gray-300 h-[55vh] w-full min-h-full  p-4">
 
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
</div>


    <div className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4 mt-4 gap-6">
      
          {products.map((product) => (
            <Card key={product.id} item={product} />
          ))}
          </div>
          </div>
        </div>
        
        </div>
  )
}

export default Product

export const div=(  <div className="manu flex justify-center items-center bg-base-300  h-16">
  <ul className='navbar-horizontal flex items-center'>
    <li className='tracking-wider'><Link to='/'>Home /  Products1</Link></li>
  </ul>
 </div>)