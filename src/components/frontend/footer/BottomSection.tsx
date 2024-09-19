import Link from "next/link";
import { FaCopyright } from "react-icons/fa";

const BottomSection = () => {
  return (
    <div className="pt-8">
      <div className="flex gap-2 items-center">
        <FaCopyright /> <span><Link href="/" className="text-primary">Your Site Name</Link> , All right reserved.</span>
      </div>
      <div></div>
    </div>
  )
}

export default BottomSection
