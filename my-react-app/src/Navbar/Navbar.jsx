import React from 'react'
import Search from './Search'

const Navbar = ({info, input, setInput}) => {
  return (
    <div className='bg-slate-500 h-[80px] p-4'>
      <div className='flex justify-center items-center gap-4'>
      <p>Movie Zone</p>
      <Search info= {info} input={input} setInput={setInput}/>
      <button className='bg-slate-700 rounded-[20px] text-slate-100 shadow-lg hover:shadow-none w-[100px] p-[2px]'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
