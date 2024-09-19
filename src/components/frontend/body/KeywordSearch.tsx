"use client";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const KeywordSearch = () => {
  const [value, setValue] = useState<string>("");
  const [showQuit, setShowQuit] = useState<boolean>(false);
  const handleSearch = (e: any) => {
    setValue(e.target.value)
    // value.length > 0 ? setShowQuit(true): setShowQuit(false);
    value.length < 1 ? setShowQuit(false) : setShowQuit(true);
  }
  return (
    <div className="flex h-14 border border-gray-200 rounded-lg">
      <div className="flex items-center px-4 flex-1">
      <input type="text" placeholder="Keyword" value={value} className="outline-none flex-1" onChange={handleSearch} />
      {
        showQuit &&
        <RxCross2/>
      }
      </div>
      <button className="h-full px-4 bg-gray-200 text-lg text-slate-700"> <IoSearchSharp/> </button>
    </div>
  )
}

export default KeywordSearch
