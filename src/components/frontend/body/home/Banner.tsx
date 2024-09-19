import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 flex gap-4 py-16">
        <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-7xl font-bold leading-tight">Fresh Exotic Fruits</h1>
            <h2 className="text-6xl text-slate-700">in Our Store</h2>
            <p className="text-slate-600">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <button className="py-3 px-10 border-2 border-white text-slate-700 w-max rounded-full uppercase font-semibold">Buy</button>
        </div>
        <div className="flex-1 h-[400px] relative">
            <Image src="/baner-1.png" alt="" className="object-cover" fill />
            <div className="flex items-center justify-center text-slate-700 bg-white w-[140px] h-[140px] rounded-full absolute z-10 -top-8 left-8 gap-1">
                <div className="text-7xl font-bold">1</div>
                <div>
                    <div className="text-2xl font-semibold">50$</div>
                    <div className="text-slate-600 text-xl -mt-2">kg</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
