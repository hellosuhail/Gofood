import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
 <header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-[#233a95] mb-[1px] text-white gap-4">

  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
    <Link
      to="/log"
      className="bg-transparent p-3 border-2 text-xl rounded-3xl cursor-pointer"
    >
      <IoPersonSharp />
    </Link>

    <div className="text-center md:text-left">
      <h1 className="text-2xl md:text-3xl font-bold">Grocery Mart</h1>
      <span className="text-sm md:text-base">Online Grocery Shopping</span>
    </div>
  </div>

 
  <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2 md:gap-4">
    <div className="relative w-full md:w-64">
      <input
        type="search"
        placeholder="Search"
        className="w-full pl-4 pr-12 py-2 rounded-xl bg-white text-black"
      />
      <FaSearch className="absolute right-4 top-2.5 text-gray-500" />
    </div>

    <div className="text-2xl p-3 border rounded-3xl cursor-pointer">
      <FaShoppingBag />
    </div>
  </div>
</header>

  );
}

export default Header;
