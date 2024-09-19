import React from 'react'
import ProductReviewCard from '../ProductReviewCard'
import ProductReviewCard2 from '../ProductReviewCard2'

const BestSellerSection = () => {
  return (
    <div className="py-12 my-20">
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 text-slate-700">
            <h1 className="text-5xl font-bold text-center">Bestseller Products</h1>
            <p className="text-lg font-light mt-4 text-center w-[700px] mx-auto">Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

            <div className="flex gap-6 flex-wrap mt-10">
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
                <ProductReviewCard />
            </div>
            <div className="flex gap-8 mt-8">
              <ProductReviewCard2 />
              <ProductReviewCard2 />
              <ProductReviewCard2 />
              <ProductReviewCard2 />
            </div>
        </div>
    </div>
  )
}

export default BestSellerSection
