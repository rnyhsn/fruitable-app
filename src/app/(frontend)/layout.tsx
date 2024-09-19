import Footer from '@/components/frontend/footer/Footer'
import Header from '@/components/frontend/header/Header'
import React from 'react'

const FrontEndLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col justify-between">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default FrontEndLayout
