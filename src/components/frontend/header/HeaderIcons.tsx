"use client";
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";

import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import SearchBox from './SearchBox';
import { RxCross2 } from "react-icons/rx";



const HeaderIcons = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="flex items-center gap-6">
      <div className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center cursor-pointer hover:bg-secondary transition-all duration-300" onClick={()=> setSearchOpen(true)}>
        <IoSearchSharp className="text-2xl text-primary" />
      </div>
     
      <div className="relative">
        <FaShoppingBag className="text-primary text-3xl hover:text-[#679D06] cursor-pointer" />
        <div className="bg-secondary text-sm h-5 w-5 flex items-center justify-center rounded-full absolute -right-2 -top-2">3</div>
      </div>
      <div>
        <FaUserAlt className="text-primary text-3xl hover:text-[#679D06] cursor-pointer" />
      </div>
      {
        searchOpen && (
          <div style={{background: "rgba(0,0,0,.4)"}} className={`h-screen w-screen absolute left-0 top-0 transition-all duration-300`}>
                <div className="w-screen fixed left-0 h-[200px] flex items-center justify-center top-0" style={{background: "rgba(0,0,0, .9)"}}>
                  <button className="absolute left-4 top-4" onClick={()=> setSearchOpen(false)}> <RxCross2 className="text-4xl text-white hover:text-primary" /> </button>
                <SearchBox />
                </div>
            </div>
        )
      }
      
    </div>
  )
}

export default HeaderIcons
