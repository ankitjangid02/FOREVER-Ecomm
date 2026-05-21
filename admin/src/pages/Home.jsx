import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

  const fetchData = async () => {

    try {

      const token = localStorage.getItem('token')

      const productResponse = await axios.get(
        backendUrl + '/api/product/list'
      )

      const orderResponse = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )

      if (productResponse.data.success) {
        setProducts(productResponse.data.products)
      }

      if (orderResponse.data.success) {
        setOrders(orderResponse.data.orders)
      }

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full p-6'>

      <h1 className='text-3xl font-bold text-gray-700 mb-2'>
        Welcome Back Admin 👋
      </h1>

      <p className='text-gray-500 mb-10'>
        Manage your products and orders efficiently.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>

        <div className='bg-white shadow-md rounded-xl p-6 border'>
          <h2 className='text-gray-500 text-sm'>
            Total Products
          </h2>

          <p className='text-4xl font-bold text-black mt-3'>
            {products.length}
          </p>
        </div>

        <div className='bg-white shadow-md rounded-xl p-6 border'>
          <h2 className='text-gray-500 text-sm'>
            Total Orders
          </h2>

          <p className='text-4xl font-bold text-black mt-3'>
            {orders.length}
          </p>
        </div>

      </div>

      <div className='flex flex-wrap gap-4'>

        <button
          onClick={() => navigate('/add')}
          className='bg-gray-200 hover:bg-black hover:text-white text-gray-700 px-6 py-3 rounded-lg transition-all duration-300'
        >
          ➕ Add Product
        </button>

        <button
          onClick={() => navigate('/list')}
          className='bg-gray-200 hover:bg-black hover:text-white text-gray-700 px-6 py-3 rounded-lg transition-all duration-300'
        >
          📋 Product List
        </button>

        <button
          onClick={() => navigate('/orders')}
          className='bg-gray-200 hover:bg-black hover:text-white text-gray-700 px-6 py-3 rounded-lg transition-all duration-300'
        >
          📦 Orders
        </button>

      </div>

    </div>
  )
}

export default Home