import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoBag } from "react-icons/io5";


const ProductCard = ({signal}: {signal: boolean}) => {
  return (
    <Link href={`/shop-details`} className={`w-[23%] ${signal && "w-[31%]"} rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl`}>
      <div className="relative h-[180px] w-full">
        <Image src="/fruite-item-2.jpg" alt="" className="object-cover hover:scale-110 transition-all duration-300" fill />
      </div>
      <div className="px-6 py-5 border border-secondary rounded-xl overflow-hidden">
        <div className="flex flex-col gap-3">
            <h2 className="text-center text-2xl font-semibold text-slate-800">Grapes</h2>
            <p className="text-center font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus, ipsam natus?</p>

            <div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">$123.56 / kg</h2>
                <button className="flex gap-2 items-center px-4 py-2 rounded-full border border-secondary text-primary group hover:bg-secondary transition-all duration-500"> <IoBag className="text-lg" /> <span className="group-hover:text-white">Add to Cart</span> </button>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
