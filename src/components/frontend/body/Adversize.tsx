import Image from 'next/image'
import React from 'react'

const Adversize = () => {
  return (
    <div className="w-full h-[350px] relative rounded-xl overflow-hidden">
        <Image src="/banner-fruits.jpg" alt="advertise" className="object-cover" fill />
        <div className="absolute z-10 text-secondary text-3xl font-bold w-[100px] top-1/2 -translate-y-1/2 right-3">
            Fresh Food Banner
        </div>
    </div>
  )
}

export default Adversize
