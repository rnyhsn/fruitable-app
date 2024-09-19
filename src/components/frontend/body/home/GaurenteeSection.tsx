import React from 'react'
import GaurenteeCard from './GaurenteeCard'

const GaurenteeSection = () => {
  return (
    <div className="flex gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-32 bg-slate-100 px-10 py-14">
      <GaurenteeCard title="satisfied customers" amount="1963" />
      <GaurenteeCard title="quality of service" amount="99%" />
      <GaurenteeCard title="quality certificates" amount="33" />
      <GaurenteeCard title="Available Products" amount="789" />
    </div>
  )
}

export default GaurenteeSection
