
import Image from 'next/image'
import Link from 'next/link';

import { IoBag } from "react-icons/io5";
import Ratings from './Ratings';


const ProductReviewCard2 = () => {
    
  return (
    <div className="w-[23%] shrink-0">
        <div className="relative h-[170px] w-full rounded-xl overflow-hidden">
            <Image src="/fruite-item-2.jpg" alt="" className="object-cover" fill />
        </div>
        <div className="flex items-center justify-center flex-col gap-3 p-5 text-slate-800">
            <Link href="#" className="text-2xl hover:text-primary">Product Title</Link>
            <div className="flex gap-1">
            {/* {
                [1,2,3,4,5].map(item => (
                    <FaStar onClick={()=> setRatings(item)} className={`cursor-pointer ${item <= ratings && "text-primary"}`} />
                ))
            } */}

            <Ratings />
                
            </div>
            <div className="flex">
                <div className="text-2xl">34</div>
                <div>.56 $</div>
            </div>
            <button className="py-2 px-6 border-2 border-secondary rounded-full flex gap-1.5 items-center text-primary hover:bg-secondary hover:text-white"> <IoBag className="text-lg" />  Add to Cart </button>
        </div>
    </div>
  )
}

export default ProductReviewCard2
