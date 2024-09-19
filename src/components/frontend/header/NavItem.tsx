"use client";
import React, { useState } from 'react'
import { LinkItem } from './NavList'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
import SubPages from './SubPages';


const NavItem = ({nav}: {nav: LinkItem}) => {
    const [selected, setSelected] = useState("");
  return (
    <div className={`relative group`}>
        <Link href={nav.path} onClick={()=> setSelected(nav.path)} className={`hover:text-primary relative flex items-center gap-2 ${selected === nav.path && "text-primary"}`}>
            {nav.title}  
            {/* { nav.subPages && <FaAngleDown /> } */}
        </Link>
        {/* {
            nav.subPages && (
                <div className="flex flex-col h-0 overflow-hidden group-hover:h-max absolute right-0 bg-white shadow-md group-hover:py-2 w-[130px] rounded-md group-hover:border border-gray-300 transition-all duration-500">
                    <SubPages pages={nav.subPages} />
                </div>
            )
        } */}
    </div>
  )
}

export default NavItem
