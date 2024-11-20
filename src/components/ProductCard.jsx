import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function ProductCard({product}) {

  const dispatch=useDispatch()

  const handleAddToCart=(e,product)=>{
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success('Product added successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <div  className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
           <FaStar className='text-yellow-500'/>
           <FaStar className='text-yellow-500'/>
           <FaStar className='text-yellow-500'/>
           <FaStar className='text-yellow-500'/>
        </div>
        <div 
            onClick={(e)=>handleAddToCart(e,product)}
            className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-600 transition-all'>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to Cart</span>
        </div>
    </div>
  )
}

export default ProductCard