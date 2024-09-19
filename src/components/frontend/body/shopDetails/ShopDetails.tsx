import React from 'react'
import ShopBanner from '../ShopBanner'
import Sidebar from '../Sidebar'
import SingleProduct from './SingleProduct'
import DescriptionReviewSection from './DescriptionReviewSection'
import CommentBox from './CommentBox'
import ProductCard from '../ProductCard'

const ShopDetails = () => {
  return (
    <div>
      <ShopBanner />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-20 flex flex-col">
        <div className="flex gap-12">
          <div className="flex-[4]">
            <SingleProduct />
            <DescriptionReviewSection />
            <CommentBox />
          </div>
          <div className="flex-1">
              <Sidebar showPriceRange={false} />
          </div>
        </div>
          <div className="mt-20">
            <h2 className="text-4xl text-slate-700 font-bold">Related Products</h2>
            <div className="flex gap-6 mt-10">
                <ProductCard signal={false} />
                <ProductCard signal={false} />
                <ProductCard signal={false} />
                <ProductCard signal={false} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ShopDetails
