import Image from 'next/image'
import React from 'react'

const OfferCard = ({item}: {item: {bgColor: string, borderColor: string, subCardColor: string, titleColor: string, img: string, title: string, offer: string}}) => {
  return (
    <div className={`w-1/3 h-[400px] border border-${item.borderColor} rounded-xl overflow-hidden bg-${item.bgColor} cursor-pointer`}>
        <div className="w-full h-[300px] relative">
            <Image src={item.img} alt="" className="" fill />
            <div className={`w-[70%] mx-auto rounded-md py-6 bg-${item.subCardColor}  absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center`}>
                <h2 className={`text-${item.titleColor} text-xl font-semibold`}> {item.title} </h2>
                <h2 className="text-2xl font-bold text-slate-600"> {item.offer} </h2>
            </div>
        </div>

    </div>
  )
}

export default OfferCard
