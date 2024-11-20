import React from 'react'
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaLock, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-3x1 text-red-600" />,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-3x1 text-red-600" />,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBillWave className="text-3x1 text-red-600" />,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className="text-3x1 text-red-600" />,
            title: 'Payment Secure',
            description: 'Your payment information is safe with us',
        },
        {
            icon: <FaTag className="text-3x1 text-red-600" />,
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        },
    ];


    return (
      <div className='bg-white pt-12 pb-8'>
        <div className= 'container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((items,idx)=>(
               <div key={idx} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                {items.icon}
                <h3 className='mt-4 text-xl font-semibold'>{items.title}</h3>
                <p className='mt-2 text-gray-600'>{items.description}</p>
               </div>
            ))}
        </div>
      </div>
    )
}

export default InfoSection