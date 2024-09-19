import Image from 'next/image'


import { IoBag } from "react-icons/io5";
import Ratings from './Ratings';


const ProductReviewCard = () => {
 
  return (
    <div className="flex gap-4 bg-slate-100 p-5 items-center w-[31%] shrink-0 rounded-lg">
      <Image src="/fruite-item-2.jpg" alt="" width={100} height={100} className="rounded-full w-28 h-28" />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Organic Tomato</h1>
        {/* Review stars */}
        <div className="flex gap">
        {/* {
            arr.map((star) => {

            
                return <IoStar className={`cursor-pointer text-lg ${star <= ratings && "text-primary"}`} onClick={()=> setRatings(star)} key={star} />
            })
        } */}
        <Ratings />
        </div>
        <div className="flex font-semibold">
            <div className="text-2xl">3</div>
            <div className="text-lg">.23 $</div>
        </div>
        <button className="flex items-center gap-2 py-2 px-4 border-2 border-secondary text-primary hover:bg-secondary hover:text-white rounded-full"> <IoBag />  Add to Cart </button>
      </div>
    </div>
  )
}

export default ProductReviewCard
