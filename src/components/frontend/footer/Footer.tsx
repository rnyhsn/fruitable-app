import React from 'react'
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'
import BottomSection from './BottomSection'

const Footer = () => {
  return (
    <div className="bg-slate-600 px-4 sm:px-8 md:px-16 lg:px-32 text-white pt-12 pb-8 mt-20">
      <TopSection />
      <div className="border-t border-secondary" />
      <MiddleSection />
      <BottomSection />
    </div>
  )
}

export default Footer
