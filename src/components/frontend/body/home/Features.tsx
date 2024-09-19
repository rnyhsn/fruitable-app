import React from 'react'
import IconCard from './IconCard'
import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdCall } from "react-icons/md";


export interface IItem {
    title: string 
    description: string 
    icon: React.ReactNode
}

const featuredItems = [
    {
        title: "Free Shipping",
        description: "Free on order over $300",
        icon: <FaCarSide className="text-5xl" />
    },
    {
        title: "Security Payment",
        description: "100% security payment",
        icon: <FaUserShield className="text-5xl" />
    },
    {
        title: "30 Day Return",
        description: "30 day money guarantee",
        icon: <FaArrowRightArrowLeft className="text-5xl" />
    },
    {
        title: "24/7 Support",
        description: "Support every time fast",
        icon: <MdCall className="text-5xl" />
    },
]

const Features = () => {
  return (
    <div className="flex gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-20">
    {
        featuredItems.map(item => (
            <IconCard item={item} key={item.title} />
        ))
    }
    </div>
  )
}

export default Features
