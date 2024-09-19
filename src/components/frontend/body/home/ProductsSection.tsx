"use client";
import React, { useState } from 'react'
import ProductCard from '../ProductCard';

const categoryLists = ["all products", "vegetable", "fruits", "bread", "meat"]

const ProductsSection = () => {
    const [selectedCat, setSelectedCat] = useState<string>(categoryLists[0]);
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-10">
      {/* Title & Categories section */}
      <div className="flex justify-between text-slate-800">
        <h2 className="text-3xl tracking-wider font-bold">Our Organic <br/>Products</h2>
        <div className="flex gap-2">
            {
                categoryLists.map(category=> (
                    <span onClick={()=> setSelectedCat(category)} className={`capitalize px-8 text-lg py-1.5 h-max cursor-pointer rounded-full ${category === selectedCat && "bg-secondary text-white"}`}> {category} </span>
                ))
            }
        </div>
      </div>
      {/* Product Card Section */}
      <div className="flex gap-6 flex-wrap mt-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
      </div>
    </div>
  )
}

export default ProductsSection
