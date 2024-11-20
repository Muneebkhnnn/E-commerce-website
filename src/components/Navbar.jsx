import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Navbar() {
  const products=useSelector(state=>state.cart.products)// store s access krrhe initial state ko cart ki jo cartSlice method m h products k andr
  return (
    <nav className='bg-white shadow-md '>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center '>
        <div className='text-lg font-bold'>    
          <Link to='/'>NextDoor</Link>
        </div>
        <div className='relative mx-4 flex-1 '>
          <form >
            <input type="text" placeholder='Search Product' className='w-full border px-4 py-2'/>
            <FaSearch className='absolute top-3 right-2 text-customBlue'/>
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/cart' className='flex'>
          {products.length>0 ? products.length:<></> }
            <FaShoppingCart className='text-xl'/>
          </Link>
          <button className='hidden md:block'>
            Login | Register
          </button>
          <button className='block md:hidden'>
            <FaUser/>
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to='/' className='hover:underline '>
        Home
        </Link>
        <Link to='/shop' className='hover:underline'>
          Shop
        </Link>
        <Link to='/' className='hover:underline'>
          Contact
        </Link>
        <Link to='/' className='hover:underline'>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar