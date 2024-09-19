import Link from 'next/link'
import React from 'react'

const CartTotal = () => {
  return (
      <div className="bg-slate-100 px-8 py-6 text-slate-700 w-[300px] rounded-xl">
            <h1 className="text-3xl font-semibold mb-8"><span className="text-bold">Cart</span> Total</h1>
            <div className="flex flex-col gap-6 text-xl" >
                <div className="flex items-center justify-between">
                    <h2>Subtotal:</h2>
                    <p>$96.00</p>
                </div>
                <div className="flex items-center justify-between ">
                    <h2>Shipping Rate:</h2>
                    <p> $3.00</p>
                </div>
                <div className="border-b border-b-slate-400"></div>
                <div className="flex items-center justify-between">
                    <h2>Total: </h2>
                    <p>$88.00</p>
                </div>
                <Link href="/checkout" className="py-2 px-4 border border-secondary text-primary rounded-full w-max hover:bg-secondary hover:text-white transition-all duration-300">Checkout</Link>
            </div>
      </div>
  )
}

export default CartTotal
