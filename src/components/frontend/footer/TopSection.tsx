import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const TopSection = () => {
  return (
    <div className="flex justify-between items-center py-8 w-full">
      {/* Logo Section */}
      <div className=" w-1/4">
        <Link className="text-primary text-4xl font-semibold" href="/" >Fruitables </Link>
        <p className="text-secondary mt-1">Fresh Products</p>
      </div>
      {/* Search Box Section */}
      <div className="w-1/2">
        <div className="flex items-center rounded-full bg-white overflow-hidden group-active:border-primary">
          <input type="text" className="flex-1 border-none outline-none px-6 text-slate-800" placeholder="Search Here..." />
          <button className="py-4 px-8 rounded-full bg-primary text-white">Search Now</button>
        </div>
      </div>
      {/* Social Icon Section */}
      <div className="flex gap-3 w-1/4 justify-end">
        <div className="w-10 h-10 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-black cursor-pointer transition-all duration-300"> <FaFacebookF /> </div>
        <div className="w-10 h-10 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-black cursor-pointer transition-all duration-300"> <FaTwitter /> </div>
        <div className="w-10 h-10 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-black cursor-pointer transition-all duration-300"> <FaYoutube /> </div>
        <div className="w-10 h-10 rounded-full border border-secondary text-secondary flex items-center justify-center hover:bg-secondary hover:text-black cursor-pointer transition-all duration-300"> <FaLinkedinIn /> </div>
      </div>
    </div>
  )
}

export default TopSection
