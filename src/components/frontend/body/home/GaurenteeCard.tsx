import { MdGroups2 } from "react-icons/md";


const GaurenteeCard = ({title, amount}: {title: string, amount: string}) => {
  return (
    <div className="flex flex-col gap-3 w-[23%] bg-white rounded-xl items-center justify-center px-8 py-10">
      <MdGroups2 className="text-7xl text-secondary" />
      <h2 className="text-2xl font-semibold text-primary text-center uppercase"> {title} </h2>
      <h2 className="text-slate-700 text-3xl font-semibold"> {amount} </h2>
    </div>
  )
}

export default GaurenteeCard
