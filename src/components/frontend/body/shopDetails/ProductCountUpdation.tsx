"use client";
import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

const inStock = 10;

const ProductCountUpdation = () => {
    const [value, setValue] = useState(1);
    const handleValue = (action: string) => {
        if(action === 'increase') {
            if(value < inStock) {
                setValue(prev => prev+1);
            }
        } else if(action === 'opt') {

        } else {
            if(value > 1) {
                setValue(prev => prev-1);
            }
        }
    }
  return (
        <div className="flex items-center gap-8">
            <div className="h-10  border-primary w-max flex items-center rounded-xl overflow-hidden">
                <button onClick={()=> handleValue('')} className="h-full px-4 bg-slate-200"><FaMinus /></button>
                <input type="text" value={value} className="w-20 px-8 h-full outline-none" />
                <button onClick={()=> handleValue('increase')} className="h-full px-4 bg-slate-200"> <MdAdd /></button>
            </div>
            <div className="flex gap-2 text-slate-800">
                <h2 className="font-semibold">Stock: </h2> <span className=""> {inStock} </span>
            </div>
        </div>
  )
}

export default ProductCountUpdation
