import React from 'react'
import NavList from './NavList'
import HeaderIcons from './HeaderIcons'
import Link from 'next/link'

const HeaderBg = () => {
  return (
    <div className="flex justify-between w-full h-[90px] items-center">
      {/* Logo Section */}
        <Link className="text-4xl font-bold text-primary" href="/">Fruitables</Link>

      {/* NavLinks Section */}
      <div>
        <NavList />
      </div>

      {/* Icons Section */}
      <div>
        <HeaderIcons />
      </div>
    </div>
  )
}

export default HeaderBg
