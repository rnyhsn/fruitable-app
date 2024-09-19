import Link from "next/link";
import { IoBag } from "react-icons/io5";


const AddToCart = () => {
  return (
    <Link href="/cart" className="py-2.5 px-6 w-max rounded-full border border-secondary text-primary flex items-center gap-1.5"> <IoBag />  Add to Cart</Link>
  )
}

export default AddToCart
