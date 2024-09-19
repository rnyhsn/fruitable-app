import React from 'react'
import ShopBanner from '../ShopBanner'
import Image from 'next/image'

import { RxCross2 } from "react-icons/rx";
import ProductIncrease from './ProductIncrease';
import Coupon from './Coupon';
import CartTotal from './CartTotal';

const Cart = () => {
  return (
    <div className="">
      <ShopBanner />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-20">
        <table className="w-full text-left">
            <thead className="border-b border-b-slate-400 text-slate-600">
                <tr>
                    <th className="pb-2">Products</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Price</th>
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-b-slate-400">
                    <td className="p-2">
                        <Image src="/single-item.jpg" alt="" className="object-cover" width={70} height={70} />
                    </td>
                    <td>Big Banana</td>
                    <td>2.99 $</td>
                    <td> <ProductIncrease /> </td>
                    <td> 2.99 $ </td>
                    <td> <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-200 cursor-pointer"><RxCross2 className="font-bold text-xl text-red-700 " /></div>  </td>
                </tr>
                <tr className="border-b border-b-slate-400">
                    <td className="p-2">
                        <Image src="/single-item.jpg" alt="" className="object-cover" width={70} height={70} />
                    </td>
                    <td>Big Banana</td>
                    <td>2.99 $</td>
                    <td> <ProductIncrease /> </td>
                    <td> 2.99 $ </td>
                    <td> <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-200 cursor-pointer"><RxCross2 className="font-bold text-xl text-red-700 " /></div>  </td>
                </tr>
                <tr className="border-b border-b-slate-400">
                    <td className="p-2">
                        <Image src="/single-item.jpg" alt="" className="object-cover" width={70} height={70} />
                    </td>
                    <td>Big Banana</td>
                    <td>2.99 $</td>
                    <td> <ProductIncrease /> </td>
                    <td> 2.99 $ </td>
                    <td> <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-200 cursor-pointer"><RxCross2 className="font-bold text-xl text-red-700 " /></div>  </td>
                </tr>
                <tr className="border-b border-b-slate-400">
                    <td className="p-2">
                        <Image src="/single-item.jpg" alt="" className="object-cover" width={70} height={70} />
                    </td>
                    <td>Big Banana</td>
                    <td>2.99 $</td>
                    <td> <ProductIncrease /> </td>
                    <td> 2.99 $ </td>
                    <td> <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-200 cursor-pointer"><RxCross2 className="font-bold text-xl text-red-700 " /></div>  </td>
                </tr>
                <tr className="border-b border-b-slate-400">
                    <td className="p-2">
                        <Image src="/single-item.jpg" alt="" className="object-cover" width={70} height={70} />
                    </td>
                    <td>Big Banana</td>
                    <td>2.99 $</td>
                    <td> <ProductIncrease /> </td>
                    <td> 2.99 $ </td>
                    <td> <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-200 cursor-pointer"><RxCross2 className="font-bold text-xl text-red-700 " /></div>  </td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-between mt-10">
        <Coupon />
        <CartTotal />
        </div>
      </div>
    </div>
  )
}

export default Cart
