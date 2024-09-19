"use client";
import React, { useState } from 'react'

const PriceRange = () => {
    const [value, setValue] = useState<number>(0)
    console.log(value);
  return (
    <div className="flex flex-col gap-3 text-slate-700 font-semibold">
        <span className="text-xl">Price Range: <span className='font-semibold'>$0</span> - <span className="font-semibold"> ${value} </span> </span>
        <div className="flex flex-col gap-2">
        <input type="range" className=' cursor-pointer' max={1000} min={0} value={value} onChange={e=> setValue(Number(e.target.value))}  />
        </div>
    </div>
  )
}

export default PriceRange
