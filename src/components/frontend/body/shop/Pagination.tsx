import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Pagination = () => {
  return (
    <div className="flex gap-1 mt-4">
      <div className="px-3 py-1.5 rounded-md border border-secondary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> <MdKeyboardDoubleArrowLeft/> </div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">1</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">2</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">3</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">4</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">5</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">6</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary hover:bg-primary hover:text-white cursor-pointer">7</div>
      <div className="px-3 py-1.5 rounded-md border border-secondary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"> <MdKeyboardDoubleArrowRight/> </div>
    </div>
  )
}

export default Pagination
