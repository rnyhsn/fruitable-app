import React from 'react'
import ShopBanner from '../ShopBanner'
import BillingInfo from './BillingInfo'

const Checkout = () => {
  return (
    <div>
      <ShopBanner />
      <div className="mt-20 flex gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <div className="flex-[2]">
            <BillingInfo />
        </div>
        <div className="flex-[1.2]">

        </div>
      </div>
    </div>
  )
}

export default Checkout
