import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About us</Link>
                <Link to='/orders'>Delivery</Link>
                <Link to='/privacypolicy'>Privacy Policy</Link>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-95888-09462</li>
                <li>ankitj2811@gmail.com</li>
            </ul>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>&copy; Copyright 2026 Forever - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
