import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-[#233a95] mb-[1px] text-white gap-4 flex-wrap">
        <Link to='/log' className='bg-transparent p-4 border-2 text-xl rounded-3xl cursor-pointer'>
          <IoPersonSharp />
        </Link>

        <div className="text-center flex-1">
          <h1 className='text-3xl font-bold'>Grocery Mart</h1>
          <span className='text-sm'>Online Grocery Shopping</span>
        </div>

      <div className="flex">
        <div className="relative flex items-center w-full max-w-md mx-4">
          <input
            type="search"
            placeholder="Search"
            className="md:w-full w-60  pl-4 pr-12 py-2 rounded-xl bg-white text-black"
          />
          <FaSearch className="absolute right-4 text-gray-500" />
        </div>

        <div className="text-2xl p-4 border-[1px] rounded-3xl m-2 cursor-pointer">
          <FaShoppingBag />
        </div></div>
      </header>
    </div>
  );
}

export default Header;
