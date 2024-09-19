"use client";

import Image from "next/image";
import { useState } from "react";
import Ratings from "../Ratings";

const DescriptionReviewSection = () => {
    const [desSelected, setDesSelected] = useState(true);

  return (
    <div className="mt-20">
      <div className="border-b border-slate-300  flex gap-4 mb-4 text-slate-600">
        <button className={`border-b-2 pb-2 ${desSelected && "border-b-secondary text-primary"}`} onClick={()=> setDesSelected(true)}>Description</button>
        <button className={`pb-2 border-b-2 ${!desSelected && "border-b-secondary text-primary"}`} onClick={()=> setDesSelected(false)}>Reviews</button>
      </div>
      <div>
      {
        desSelected ? (
            <div className="text-slate-600 flex flex-col gap-4">
            <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit</p>
            <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>

            <table className="w-[50%] text-center">
                <tbody>
                    <tr className="even:bg-slate-200">
                        <td className="py-1">Weight</td>
                        <td>1 kg</td>
                    </tr>
                    <tr className="even:bg-slate-200">
                        <td className="py-1">Country of Origin</td>
                        <td>Agro Farm</td>
                    </tr>
                    <tr className="even:bg-slate-200">
                        <td className="py-1">Quality</td>
                        <td>Organic</td>
                    </tr>
                    <tr className="even:bg-slate-200">
                        <td className="py-1">Сheck</td>
                        <td>Healthy</td>
                    </tr>
                    <tr className="even:bg-slate-200">
                        <td className="py-1">Min Weight</td>
                        <td>250 Kg</td>
                    </tr>
                </tbody>
            </table>
        </div>

        ): (
            <div className="flex flex-col gap-8">
                <div className="flex gap-6">
                    
                    <Image src="/avatar.jpg" alt="" className="object-cover rounded-full w-24 h-24" width={100} height={100} />
                    
                    <div className="flex flex-col gap-1 text-slate-700">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm">April 12, 2022</span>
                                <h2 className="text-lg font-semibold">Reviewer Name</h2>
                            </div>
                            <Ratings />
                        </div>
                        <div>
                            The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    
                    <Image src="/avatar.jpg" alt="" className="object-cover rounded-full w-24 h-24" width={100} height={100} />
                    
                    <div className="flex flex-col gap-1 text-slate-700">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm">April 12, 2022</span>
                                <h2 className="text-lg font-semibold">Reviewer Name</h2>
                            </div>
                            <Ratings />
                        </div>
                        <div>
                            The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit
                        </div>
                    </div>
                </div>
                <div className="flex gap-6">
                    
                    <Image src="/avatar.jpg" alt="" className="object-cover rounded-full w-24 h-24" width={100} height={100} />
                    
                    <div className="flex flex-col gap-1 text-slate-700">
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm">April 12, 2022</span>
                                <h2 className="text-lg font-semibold">Reviewer Name</h2>
                            </div>
                            <Ratings />
                        </div>
                        <div>
                            The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit
                        </div>
                    </div>
                </div>
            </div>
        )
      }
 
      </div>
    </div>
  )
}

export default DescriptionReviewSection
