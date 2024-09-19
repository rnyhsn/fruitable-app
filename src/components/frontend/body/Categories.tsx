import { FaAppleAlt } from "react-icons/fa";
import { GiOrange } from "react-icons/gi";
import { FaFirstOrderAlt } from "react-icons/fa";
import { GiBananaBunch } from "react-icons/gi";
import { GiPumpkin } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { SiLichess } from "react-icons/si";


const categoryList = [
    {title: "Apple", icon: <FaAppleAlt />, count: 3},
    {title: "Orange", icon: <GiOrange /> , count: 10},
    {title: "Stawberry", icon: <FaFirstOrderAlt />, count: 3},
    {title: "Banana", icon: <GiBananaBunch />, count: 7},
    {title: "Pumpkin", icon: <GiPumpkin />, count: 9},
    {title: "Mango", icon: <GiFruitBowl /> , count: 1},
    {title: "Liche", icon: <SiLichess /> , count: 7}
]

const Categories = () => {
  return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl text-slate-800 mb-2 font-semibold">Categories</h2>
            <div className="flex flex-col gap-2">
                {
                    categoryList.map(item => (
                        <div className="flex justify-between">
                            <div className="flex gap-1.5 text-lg text-primary items-center hover:text-secondary cursor-pointer">
                                {item.icon}  <span> {item.title} </span>
                            </div>
                            <span className="text-slate-600"> ({item.count}) </span>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Categories
