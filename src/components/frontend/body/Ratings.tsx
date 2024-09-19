"use client";
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Ratings = () => {
    const [ratings, setRatings] = useState<number>(0)
    // console.log(ratings);
  return (
    <div className="flex gap-0.5 text-slate-500">
    {
         [1,2,3,4,5].map(item => (
          <FaStar  className={`cursor-pointer  ${item <= ratings && "text-primary"}`} onClick={()=> setRatings(item)} />
      ))
    }
    </div>
  )
}

export default Ratings
