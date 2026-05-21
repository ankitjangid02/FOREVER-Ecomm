import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={() => window.location.href = "https://forever-frontend-ecomm-eqig.vercel.app/"} className='bg-black hover:bg-gray-900 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm tracking-wide shadow-md hover:scale-105 transition-all duration-300 cursor-pointer'>GO TO FOREVER</button>
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar
