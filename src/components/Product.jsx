import React, { useEffect, useState } from 'react'
import data from '/public/data.json'
import Card from './Caed'
import Banner from './Banner'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        title={<p className="text-2xl md:text-3xl m-2 animate-fade-in">Top Selling</p>}
        subTitle={
          <h1 className="font-bold ml-4 md:ml-10 text-red-500 text-xl md:text-3xl leading-tight animate-slide-up">
            Kitchen Products
          </h1>
        }
        button={<p className="text-xl md:text-3xl m-2 animate-fade-in">Flat 25% Discount</p>}
      />

      {/* Navigation Bar */}
      {div}

      {/* Page Content */}
      <div className="flex flex-col md:flex-row ml-4 md:ml-12 mt-4 gap-4">

        {/* Sidebar */}
        <div className="w-full md:w-[20%] md:h-[60vh] mb-4 md:mb-0">
          <ul className="menu border border-gray-300 w-full p-4 mb-4">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 3</a></li>
            <li><a>Sidebar Item 4</a></li>
          </ul>

          <ul className="menu border border-gray-300 w-full p-4">
            <li><a>Sidebar Item 5</a></li>
            <li><a>Sidebar Item 6</a></li>
            <li><a>Sidebar Item 7</a></li>
            <li><a>Sidebar Item 8</a></li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

export const div = (
  <div className="manu flex justify-center items-center bg-base-300 h-16">
    <ul className="navbar-horizontal flex items-center">
      <li className="tracking-wider">
        <Link to="/">Home / Products1</Link>
      </li>
    </ul>
  </div>
)

