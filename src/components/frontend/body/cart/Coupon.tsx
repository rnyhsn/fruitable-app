import React from 'react'

const Coupon = () => {
  return (
    <div className="flex gap-4 mt-10 h-max">
      <input type="text" className="py-3 px-4 rounded-xl " placeholder="Coupon Code" />
      <button className="py-3 px-4 rounded-full border border-secondary text-primary hover:bg-secondary hover:text-white transition-all duration-300">Apply Coupon</button>
    </div>
  )
}

export default Coupon
