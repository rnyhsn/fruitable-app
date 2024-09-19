import React from 'react'
import KeywordSearch from './KeywordSearch'
import Categories from './Categories'
import PriceRange from './shop/PriceRange'
import Additional from './Additional'
import SidebarProducts from './SidebarProducts'
import Adversize from './Adversize'

const Sidebar = ({showPriceRange}: {showPriceRange: boolean}) => {
  return (
    <div className="flex flex-col gap-5">
        <KeywordSearch />
        <Categories />
        {
          showPriceRange && (
            <>
            <PriceRange />
            <Additional />
            </>
          )
        }
        <SidebarProducts />
        <Adversize />
    </div>
  )
}

export default Sidebar
