import React from 'react'
import SidebarProduct from './SidebarProduct'

const SidebarProducts = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-slate-700">Featured Products</h2>
      <div className="flex flex-col gap-4">
        <SidebarProduct />
        <SidebarProduct />
        <SidebarProduct />
        <SidebarProduct />
      </div>
      <button className="py-3 px-4 border border-secondary rounded-full  text-primary hover:bg-secondary hover:text-white transition-all duration-300">View More</button>
    </div>
  )
}

export default SidebarProducts
