import React from 'react'
import { assets } from '../assets/assets'

const Loader = () => {
  return (

    <div className='fixed inset-0 bg-white flex items-center justify-center z-50'>

      <img src={assets.logo} className='w-32 animate-pulse' />

    </div>

  )
}

export default Loader