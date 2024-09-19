import React from 'react'

const BillingInfo = () => {
  return (
    <div className="text-slate-700">
      <h1 className="text-4xl font-semibold mb-10">Billing Details</h1>
      <form action="" className="flex flex-col gap-8">
        <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-1 rounded-lg">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" className="py-2 px-4 border border-slate-300 outline-none" />
            </div>      
            <div className="flex-1 flex flex-col gap-1">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName"  className="py-2 px-4 border border-slate-300 outline-none"/>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="company">Company Name</label>
            <input type="text" name="company" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="city">Town/City</label>
            <input type="text" name="city" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="zip">Postcode/Zip</label>
            <input type="text" name="zip" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" name="" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="email">E-mail Address</label>
            <input type="email" name="email" className="py-2 px-4 border border-slate-300 outline-none" />
        </div>
        <div>
            <label htmlFor="account">
                <input type="radio" name="account" /> Create an Account?
            </label>
        </div>
        <div className="flex flex-col gap-1">
            <textarea name="orderNote" className="py-2 px-4 border border-slate-300 outline-none h-[150px]" placeholder="Order Note (optional)"></textarea>
        </div>
      </form>
    </div>
  )
}

export default BillingInfo
