import { IoLocationSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";



const HeaderSm = () => {
  return (
    <div className="bg-primary text-sm py-4 px-5 text-white flex justify-between" style={{borderRadius: "50px 20px 50px 20px"}}>
      {/* location & Contact Info */}
      <div className="flex items-center gap-6 font-light">
        <div className="flex items-center gap-2"> <IoLocationSharp className="text-secondary text-lg" /> 123 Street, New Work</div>
        <div className="flex items-center gap-2"> <FaRegEnvelope className="text-secondary text-lg" />  info@gmail.com </div>
      </div>
      {/* Others Infos */}
      <div className="flex gap-2">
        <Link href="/" className="hover:text-secondary transition-all duration-300">Privacy Policy</Link> 
            <span>/</span>
        <Link href="/" className="hover:text-secondary transition-all duration-300">Term of Use </Link> 
            <span>/</span>
        <Link href="/" className="hover:text-secondary transition-all duration-300"> Sales & Refunds </Link> 
            
      </div>
    </div>
  )
}

export default HeaderSm
