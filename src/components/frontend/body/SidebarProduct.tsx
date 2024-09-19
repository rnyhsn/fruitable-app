import Image from 'next/image'
import React from 'react'
import Ratings from './Ratings'

const SidebarProduct = () => {
  return (
    <div className="flex gap-4">
      <div className="relative w-1/3 h-[80px]">
        <Image src="/featur-1.jpg" alt="" className="" fill />
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-slate-700">Product title</h2>
        <Ratings />
        <div className="flex gap-4">
            <div className="flex text-slate-700 font-bold">
                <div>4.</div>
                <div className="text-xl">56 {" "} </div>
                <div className="text-lg"> $</div>
            </div>
            <div className="flex font-bold text-red-600 line-through">
                <div>4.</div>
                <div className="text-xl">56 {" "} </div>
                <div className="text-lg"> $</div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default SidebarProduct
