"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const slides = [
    {title: "Vegetables", img: "/hero-img-1.png"},
    {title: "Fruits", img: "/hero-img-2.jpg"},
    {title: "Meat", img: "/hero-img.jpg"},
]

const Hero = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlide = (move: string) => {
    if(move === 'back') {
        // setSlideIndex(prev => prev > slides.length-1 ? 0 : prev+1);
        setSlideIndex(prev => prev === 0 ? slides.length-1: prev-1);
    } else {
      // setSlideIndex(prev => prev < 0 ? slides.length-1 : prev-1);
      setSlideIndex(prev => prev === slides.length-1 ? 0 : prev+1);
    }
  }
  console.log(slideIndex);
  return (
    <div className="w-screen h-screen flex gap-12 items-center px-4 sm:px-8 md:px-16 lg:px-32" style={{background: "url('hero-img.jpg')", backgroundSize: "cover"}}>
        {/* TExt Section */}
      <div className="flex flex-col gap-6 w-[57%]">
        <h2 className="text-2xl text-secondary font-semibold">100% Organic Foods</h2>
        <h1 className="text-6xl font-bold text-primary">Organic Veggies & Fruits Foods</h1>
        <div className="flex items-center border-2 border-secondary h-16 rounded-full overflow-hidden">
            <input type="text" className="flex-1 px-4 outline-none" />
            <button className="bg-secondary px-8 font-semibold text-white hover:bg-primary h-full rounded-full transition-all duration-300">Submit Now</button>
        </div>
      </div>
      {/* Sliders */}
      <div className="w-[43%] h-[300px] relative flex overflow-hidden">
      {
        slides.map((slide, index) => (
          
            slideIndex === index &&   <div className="relative w-full h-full rounded-3xl overflow-hidden bg-secondary shrink-0 transition-all duration-500 left-0">
                  <Image src={slide.img} alt="" className="object-cover" fill />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-4 rounded-md bg-secondary text-white text-lg font-semibold"> {slide.title} </div>
                </div>  
          
        ))
      }
        <div className="w-10 h-10 rounded-full flex items-center justify-center absolute z-10 top-[45%] left-1 cursor-pointer hover:bg-secondary text-white bg-slate-800" onClick={()=> handleSlide("forward")}> <IoIosArrowBack className="font-bold text-2xl" /> </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center absolute z-10 top-[45%] right-1 cursor-pointer hover:bg-secondary text-white bg-slate-800" onClick={()=> handleSlide("back")}> <IoIosArrowForward className="font-bold text-2xl" /> </div>
          
      </div>
    </div>
  )
}

export default Hero
