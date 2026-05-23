import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const login = () => {

  const googleLogin = async () => {

    try {

      // Prevent Google login if normal login already exists
      if (localStorage.getItem('token')) {
        toast.error('Already Logged In')
        return
      }

      const result = await signInWithPopup(auth, provider)

      const user = result.user

      const response = await axios.post(
        backendUrl + '/api/user/google-login',
        {
          name: user.displayName,
          email: user.email
        }
      )

      if (response.data.success) {

        // Save normal JWT token only
        setToken(response.data.token)

        localStorage.setItem('token',response.data.token)

        // Mark login type
        localStorage.setItem('loginType','google')
        toast.success('Google Login Successful')
        navigate('/')
      }

    } catch (error) {
      console.log(error)
      if (
        error.code !== 'auth/cancelled-popup-request'
      ) {
        toast.error(error.message)
      }
    }
}


  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      <button type="button" onClick={googleLogin} className='cursor-pointer w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all'>
        <img src='https://www.svgrepo.com/show/475656/google-color.svg' className='w-5 h-5' />
        Sign in with Google
      </button> 

      <p>OR</p>

      {currentState === 'Login' ? '' : <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}

      <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {
          currentState === 'Login'
            ? <p onClick={() => { setCurrentState('Sign Up') }} className='cursor-pointer'>Create Account</p>
            : <p onClick={() => { setCurrentState('Login') }} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
      {/* <button onClick={() => window.location.href = "https://forever-admin-cyan-rho.vercel.app/"} className='bg-white text-black font-light px-8 py-2 mt-4 cursor-pointer'>Go To Admin Page</button> */}
      <button onClick={() => window.location.href = "https://forever-admin-cyan-rho.vercel.app/"} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Go To Admin Page</button>
    </form>
  )
}

export default login
