import React from 'react'

const Form = () => {
  return (
    <form className="flex flex-col gap-8 w-full">
      <input className="py-4 px-3 rounded-md" type="text" name="name" placeholder="Your Name" />
      <input className="py-4 px-3 rounded-md outline-none" type="text" name="name" placeholder="Your E-mail" />
      <textarea className="py-4 rounded-md px-3 h-[200px]"  name="name" placeholder='Your Message' />
      <button className="py-3 border border-secondary rounded-md hover:bg-secondary font-semibold hover:text-white transition-all duration-300">Submit</button>
    </form>
  )
}

export default Form
