import React from 'react'
import ShopBanner from '../ShopBanner'
import Form from './Form'
import SidebarContact from './Sidebar'


const Contact = () => {
  return (
    <div>
      <ShopBanner />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 flex flex-col gap-10 mt-20 text-slate-700 bg-slate-100 rounded-xl p-8">
            <div className="flex flex-col gap-2 text-center w-[60%] mx-auto">
                <h1 className="text-3xl font-bold text-primary">Get in touch</h1>
                <div>
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.
                </div>
                <button className="text-primary">Download Now</button>
            </div>
            <div className="flex gap-10">
                <div className="flex-[3.5]">
                    <Form />
                </div>
                <div className="flex-[2]">
                   <SidebarContact />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
