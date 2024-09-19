"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ShopBanner = () => {
  const pathname = usePathname();
  
  console.log(pathname)
  return (
    <div className="w-full h-[200px] mt-32" style={{background: "url('cart-page-header-img.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "contain"}}>
        <div className="w-full h-full flex items-center justify-center" style={{background: "rgba(0,0,0, 0.4)"}}>
            <div className="text-white">
                <h2 className="text-4xl font-semibold text-center">Shop</h2>
                <div className="flex gap-2 text-center mt-2">
                    <Link href="/" className="text-primary">Home</Link>
                    <span>/</span>
                    <Link href="/" className="text-primary">Pages</Link>
                    <span>/</span>
                    <p className="capitalize"> {pathname.slice(1)} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopBanner
