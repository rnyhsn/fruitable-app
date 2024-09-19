import React from 'react'
import HeaderSm from './HeaderSm'
import HeaderBg from './HeaderBg'

const Header = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 shadow-lg fixed w-full z-40 bg-white" >
      <HeaderSm />
      <HeaderBg />
    </div>
  )
}

export default Header
