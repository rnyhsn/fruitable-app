import React from 'react'
import ProductCard from '../ProductCard'

const VegetableProducts = () => {
  return (
    <div className="flex flex-col gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32 py-10">
      <h1 className="text-4xl font-semibold text-slate-700 mb-3">Fresh Organic Vegetables</h1>
      <div className="flex gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default VegetableProducts
