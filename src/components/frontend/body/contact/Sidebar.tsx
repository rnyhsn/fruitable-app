import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";


const SidebarContact = () => {
  return (
    <div className="flex flex-col gap-4 text-slate-800">
      <div className="flex gap-4 p-6 bg-white rounded-xl">
        <FaLocationDot className="text-4xl text-primary" />
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Address</h2>
            <p>123 Street New York.USA</p>
        </div>
      </div>
      <div className="flex gap-4 p-6 bg-white rounded-xl">
        <FaEnvelope className="text-4xl text-primary" />
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Mail Us</h2>
            <p>info@example.com</p>
        </div>
      </div>
      <div className="flex gap-4 p-6 bg-white rounded-xl">
        <MdCall className="text-4xl text-primary" />
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Telephone</h2>
            <p>(+012) 3456 7890</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarContact
