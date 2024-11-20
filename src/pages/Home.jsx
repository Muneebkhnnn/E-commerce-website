import {React, useEffect} from 'react'
import InfoSection from '../components/InfoSection'
import { categories , mockData} from '../assets/MockData'
import hero_banner from '../assets/images/hero_banner.jpg'
import CategorySection from '../components/CategorySection'
import {setProducts} from '../redux/productSlice'
import {useDispatch,useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard'
import Shop from './Shop';

function Home() {

  const dispatch=useDispatch()
  const products=useSelector(state=>state.product)
   
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, []);

  return (
    <div>
    <div className='mt-2 bg-white px-4 md:px-16 lg:px-24'>
      <div className='container flex mx-auto py-4 flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/12'>
            <div className='bg-red-400 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
            <ul className='space-y-3 pl-2 bg-slate-500 border '>
              {categories.map((category,idx)=>(
                <li key={idx} className='flex items-center text-sm font-medium '>
                  <div className='h-2 w-2 rounded-full border border-red-500 mr-2'></div> 
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:9/12 mt-8 md:mt-0 h-96 relative '>
            <img src={hero_banner} alt="" className='h-full w-full'/>
            <div className='absolute top-16 left-8'>
              <h2 className='text-3xl font-bold'>WELCOME TO NEXT DOOR</h2>
              <p className='text-xl mt-2.5 font-bold text-gray-800'>MILLIONS OF PRODUCTS</p>
              <button className='rounded-md bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
            </div>
          </div>
      </div>

      <InfoSection/>
      <CategorySection/>

      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0,5).map((product)=>(
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
    </div>
    <Shop/>
    </div>
  )
}

export default Home