import React from 'react'
import Ratings from '../Ratings'

const CommentBox = () => {
  return (
    <div className="flex flex-col gap-10 mt-20 text-slate-700">
      <h1 className="text-3xl font-semibold">Leave A comment</h1>
      <form action="" className="flex flex-col gap-10">
        <div className="flex gap-8">
            <input className="py-2 px-4 flex-1 border-b border-b-slate-300 outline-none" type="text" placeholder="Your Name" name="name" />
            <input className="flex-1 py-2 px-4 border-b border-b-slate-300 outline-none" type="text" placeholder="Your E-mail" name="email" />
        </div>
        <textarea className="py-2 px-4 h-[150px] outline-none"  name="text" placeholder="Your Review..."></textarea>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <span>Please Rate: </span> <Ratings />
            </div>
            <button className="py-4 font-semibold px-8 rounded-full border border-secondary text-primary">Post Comment</button>
        </div>
      </form>
    </div>
  )
}

export default CommentBox
