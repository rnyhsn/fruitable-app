
import Link from 'next/link'
import React from 'react'

const SubPages = ({pages}: {pages: {title: string, path: string}[]}) => {
  return (
    <>
    {
        pages.map(page => (
            <Link href={page.path} className="px-4 py-1 hover:bg-secondary" key={page.title}> {page.title} </Link>
        ))
    }
    </>
  )
}

export default SubPages
