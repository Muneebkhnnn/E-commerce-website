import React from 'react'
import { useSelector } from 'react-redux'
import emptyCart from '../assets/images/emptycart.png'
import { FaTrashAlt } from 'react-icons/fa'

function Cart() {
    const cart=useSelector(state=>state.cart)
  return (
    <div className='container min-h-96 mx-auto'>
        {cart.products.length>0?
        <div>
            <h3 className='font-bold text-xl my-4'>SHOPPING CART</h3>           
                <div>
                    <div className='relative'>
                        <p>PRODUCT</p>
                        <div className='absolute flex top-0 right-3 gap-4'>
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                            <p>SUBTOTAL</p>
                            <p>REMOVE</p>
                        </div>
                    </div>
                    <div className='border-y-4 border-green-600 my-2'>
                        <div >
                            {cart.products.map((product)=>(
                                <div className='flex'>
                                    <div>
                                        <img src={product.image} alt="" className='h-20 w-15 object-contain'/>
                                        <p>{product.name}</p>
                                    </div>
                                    <div>
                                        <p>${product.price}</p>
                                        <div className='flex '>
                                            <button>+</button>
                                            <p>{product.quantity}</p>
                                            <button>-</button>
                                        </div>
                                        <p>${(product.quantity*product.price).toFixed(2)}</p>
                                        <button>
                                            < FaTrashAlt/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </div>
         :
        <div className='flex  justify-center'>
         <img src={emptyCart} alt="Empty img" className='h-80 z-0' /> 
        </div>}
        
    </div>
  )
}

export default Cart