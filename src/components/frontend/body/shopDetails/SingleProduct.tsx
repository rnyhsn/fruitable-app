import Image from 'next/image'
import React from 'react'
import Ratings from '../Ratings'
import ProductCountUpdation from './ProductCountUpdation'
import AddToCart from '../AddToCart'

const SingleProduct = () => {
  return (
    <div className="flex gap-8">
        <div className="relative flex-1">
            <Image src="/single-item.jpg" alt="" className="" fill />
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl text-slate-800 font-bold">Product Name</h2>
            <div className="flex gap-2">
                <h2>Category: </h2> <span className="font-semibold text-slate-700">Vegetables</span>
            </div>
            <div className="flex gap-1.5 font-bold text-slate-700">
                <div className="text-xl">3.35</div> <div className="">$</div>
            </div>
            <Ratings />
            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <ProductCountUpdation />
            <AddToCart />
        </div>
    </div>
  )
}

export default SingleProduct
