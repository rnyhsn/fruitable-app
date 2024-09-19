import { IoSearchSharp } from "react-icons/io5";


const SearchBox = () => {
  return (
    <div className="w-[60%] flex items-center h-[120px] bg-gray-200 py-8 px-8 rounded-md">
      <div className="flex w-full rounded-md overflow-hidden">
         <input type="text" className="flex-1 py-3 px-3 outline-none border-none" placeholder="Search Here..." />
         <button className="py-3 px-4 bg-secondary hover:opacity-90"> <IoSearchSharp className="text-3xl"/>  </button>
      </div>
    </div>
  )
}

export default SearchBox
