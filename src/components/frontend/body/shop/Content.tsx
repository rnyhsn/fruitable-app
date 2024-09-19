import React from 'react'
import ProductCard from '../ProductCard'
import Pagination from './Pagination'

const Content = () => {
  return (
    <div className="flex flex-col gap-6 items-end">
      <div className="flex justify-end px-4 py-3 bg-slate-100 rounded-xl w-max"> 
        <span className="text-slate-700">Default Sorting: </span> 
        <select name="" id="" className="ml-4">
          <option value="">Nothing</option>
          <option value="">Popularity</option>
          <option value="">Organic</option>
          <option value="">Fantastic</option>
        </select>
      </div>
      <div className="flex gap-6 flex-wrap">
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
        <ProductCard signal={true} />
      </div>
      <Pagination />
    </div>
  )
}

export default Content
