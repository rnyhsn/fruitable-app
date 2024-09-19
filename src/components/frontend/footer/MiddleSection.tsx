import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MiddleSection = () => {
  return (
    <div className="flex py-8 gap-10">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold ">Why People Like us!</h2>
        <p className="leading-[2] text-slate-400">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
        <button className="px-8 py-2 border border-secondary text-primary rounded-full w-max">Read More</button>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Ship Info</h2>
        <div className="flex flex-col gap-2 text-slate-400">
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Condition</Link>
          <Link href="/">Return Policy</Link>
          <Link href="/">FAQs & Help</Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Account</h2>
        <div className="flex flex-col gap-2 text-slate-400">
          <Link href="/">My Account</Link>
          <Link href="/">Shop Details</Link>
          <Link href="/">Shopping Carts</Link>
          <Link href="/">Wishlist</Link>
          <Link href="/">Order History</Link>
          <Link href="/">International Orders</Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex flex-col gap-3 text-slate-400">
          <p>Address: 1429 Netus Rd, NY 48247</p>
          <p>Email: Example@gmail.com</p>
          <p>Phone: +0123 4567 8910</p>
          <p>Payment Accepted</p>
        </div>
        <div className="flex gap-2">
            <Image src="/payment.png" alt="" width={230} height={45}  />
        </div>
      </div>
    </div>
  )
}

export default MiddleSection
