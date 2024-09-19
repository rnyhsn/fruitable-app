import React from 'react'

const Additional = () => {
  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-slate-700 font-semibold">Additional</h2>
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <input type="radio" name="product" value="organic" /> <span>Organic</span>
            </div>
            <div className="flex items-center gap-2">
                <input type="radio" name="product" value="fresh" /> <span>Fresh</span>
            </div>
            <div className="flex items-center gap-2">
                <input type="radio" name="product" value="sale" /> <span>Sale</span>
            </div>
            <label className="flex items-center gap-2" htmlFor='product'>
                <input type="radio" name="product" value="discount" /> <span>Discount</span>
            </label>
            <div className="flex items-center gap-2">
                <input type="radio" name="product" value="expired" /> <span>Expired</span>
            </div>
        </div>
    </div>
  )
}

export default Additional
