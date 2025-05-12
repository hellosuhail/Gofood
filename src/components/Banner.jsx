import React from 'react'

const Banner = ({title,subTitle,button}) => {
  return (
    <div>
        <div className="relative z-0 w-full h-[80vh]">
        <div className="home absolute w-full h-[80vh] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="absolute top-40 left-20 max-w-2xl">
          {title}
           
            {subTitle}
            
        {button}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
{/* <button className="btn bg-red-500 w-40 h-14 text-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Shop Now
            </button> */}