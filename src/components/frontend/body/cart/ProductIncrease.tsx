"use client";
import { TiMinus } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const stock = 10;

const ProductIncrease = () => {
    const [value, setValue] = useState(1);
    
    const handleValue = (action: string) => {
        if(action === '+') {
            if(value < stock)
                setValue(prev => prev+1);
        } else {
            if(value > 1) {
                setValue(prev => prev-1);
            }
        }
    }

  return (
    <div>
        <button onClick={()=> handleValue('-')} className="px-1 py-1 rounded-full bg-slate-200"> <TiMinus /> </button>
        <input type="text" className="w-14 px-[18px] outline-none" value={value} />
        <button onClick={()=> handleValue('+')} className="px-1 py-1 rounded-full bg-slate-200"> <IoMdAdd /> </button>
    </div>
  )
}

export default ProductIncrease
