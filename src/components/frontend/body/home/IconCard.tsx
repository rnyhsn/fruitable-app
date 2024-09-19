import { IItem } from "./Features"


const IconCard = ({item}: {item: IItem}) => {
  return (
    <div className="bg-slate-200 w-1/4 pb-6 rounded-xl">
      <div className="w-full flex items-center justify-center py-6">
            <div className="w-28 h-32 text-white relative">
                <div className="w-full h-28 bg-secondary rounded-full flex items-center justify-center">
                    {item.icon}
                </div>
                <div className="w-6 h-6 bg-secondary mx-auto rotate-45 absolute bottom-2 left-1/2 -translate-x-1/2"></div>
            </div>
      </div>
      <div className="flex flex-col items-center justify-center text-slate-700">
        <h2 className="text-[20px] mb-1 font-semibold"> {item.title} </h2>
        <p className="text-sm"> {item.description} </p>
      </div>
    </div>
  )
}

export default IconCard
