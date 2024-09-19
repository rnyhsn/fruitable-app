import Content from '@/components/frontend/body/shop/Content'
import ShopBanner from '@/components/frontend/body/ShopBanner'
import React from 'react'
import Sidebar from '../Sidebar'

const Shop = () => {
  return (
    <div className="flex flex-col gap-20">
       <ShopBanner />
      <div className="flex flex-col gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <h1 className="text-4xl font-semibold text-slate-700">Fresh Food Shop</h1>
        <div className="flex gap-8">
          <div className="flex-1">
              <Sidebar showPriceRange={true} />
          </div>
          <div className="flex-[4]">
              <Content />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
