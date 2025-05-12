import React, { useEffect, useRef, useState } from 'react'
import Card from './Caed';
import data from '/public/data.json'
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const videoRef = useRef(null);
  const [card, setCard] = useState([])
  const [food,setFood] = useState([])
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate  = useNavigate()

const shop= () => {
  navigate('/products')
}
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  
  useEffect(() => {
    setCard(data.slice(0, 3))
  }, [setCard])

  useEffect(() => {
    setFood(data.slice(3, 13))
  }, [setFood])

  return (
    <div className="min-h-screen ">
    
        <Banner 
        title={<p className="text-xl  animate-fade-in">Start your daily online shopping!</p>} 
        subTitle={ <h1 className="font-bold text-4xl mb-8 leading-tight animate-slide-up">Stay home & we will <br /> deliver your daily need's</h1>}
        button={<button onClick={shop} className="btn btn-error ">Shop Now</button>}
            />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="flex relative w-full flex-col h-[70vh] items-center bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe width="560" height="315" src="x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div className="absolute inset-0 bg-black/50 justify-center items-center flex transition-opacity duration-300 opacity-0 hover:opacity-100">
                <button
                  onClick={togglePlay}
                  className="px-6 py-3 cursor-pointer text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <ul className='flex flex-wrap justify-center gap-4 mb-8'>
              {['VEGETABLES', 'MEATS & SEAFOOD', 'BAKERYS', 'BEVERAGES'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-red-50 text-gray-700 hover:text-red-500 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {card.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

      
      </div> 
      <div className="md:flex block w-full h-full ">
  <div className="add md:w-1/2  m-2 h-[70vh] bg-gray-200 flex justify-center items-center rounded-lg shadow-lg overflow-hidden">
    <div className="w-full text-end block h-full p-12 rounded-lg shadow-lg">
      <p className='mt-24 text-red-400 font-bold'>Free Delivery</p>
        <h1 className="text-5xl font-bold font-sans mb-8 text-gray-800"><span className='text-red-400 '>20%</span>Cashback</h1>
        <a href="#" className='hover:underline hover:text-red-400    decoration-solid '>Shopping Now</a>
      </div>
  </div>
      <div className="add2 md:w-1/2 m-2 h-[70vh] bg-gray-200 flex justify-center items-center rounded-lg shadow-lg overflow-hidden ">
      <div className="absolute inset-.8   bg-black/50 justify-center items-center w-1/2 flex h-[70vh]  opacity-101">
      <h1 className='btn bg-black/70 rounded-xl  text-white'>Organic Foods</h1></div>
      </div>
</div>

<h1 className=' w-full text-4xl text-center'>Special Deals</h1>
<div className="md:flex block mt-16 gap-4 p-4">
  {/* Left Section */}
  <div className="md:w-[60%] w-full h-[100vh] space-y-4">
    <div className="add3 relative transition-all duration-300 rounded-2xl h-[46vh] m-4 shadow-lg hover:scale-105">
       <h1 className='text-white text-5xl font-bold relative top-30 left-14'>We Offer <span className='text-red-500 block ml-12'>Best Products</span></h1>
       <div className="w-30 absolute top-6 right-14 rounded-full text-center  h-30 bg-red-500  ">
        <p className='text-white text-2xl font-bold relative top-8'>30%</p>
        <p className='text-white text-2xl font-bold relative top-8'>OFF/-</p>
       </div>
       {/* Best Products</span></h1> */}
    </div>
    <div className="add4 w-[94%] h-[46vh] rounded-2xl m-4 shadow-lg hover:scale-105 transition-all duration-300">
      <p className='text-white text-5xl font-bold relative top-30 left-14'>Organic <span className='text-red-500 block ml-12'>Fruits</span></p>
    </div>
  </div>

  {/* Right Section */}
  <div className="add5 md:block hidden bg-blue-500 w-[40%] rounded-2xl m-4 h-[94vh] shadow-xl hover:scale-105 transition-all duration-300  overflow-hidden">
    <p className="text-white text-4xl relative left-60   top-12 font-semibold">
      <span className='block'>Big Deals</span>
      <span className='block m-4 ml-8 text-red-500'>Save up</span>
      <span className='block ml-30'>to</span>
      <span className='block m-4 ml-26 text-red-500'>30%</span>
    </p>
  </div>
</div>


 <div className="mt-16 flex flex-wrap overflow-hidden justify-center items-center gap-4"> 
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {food.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home
