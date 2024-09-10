'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import AboutFavy from './AboutFavy'
import Carousel from './3D Rotating Carousel/Carousel'
import CartSection from './CartSection'
import { useRouter } from 'next/navigation'
import { FaBackward, FaForward, FaTrash, FaUpload } from 'react-icons/fa'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useState } from 'react'

const poppins = Poppins({subsets: ['latin'], weight:'400'})
export default function CartPage() {
  const [upload, setUpload] = useState(false)
  const [trash, setTrash] = useState(false)
  const router = useRouter();
  const cartItems = useSelector((state) => state.cartReducer.cart, shallowEqual);
  return (
    <div className={` text-white text-center bg-gradient-to-l
     from-gray-900 via-zinc-600 to-gray-900 shadow-2xl flex flex-wrap gap-4 
     rounded-md container mx-auto min-w-full max-w-[100%] mt-20 p-4 xsm:max-md:p-2 xsm:max-md:mt-0`}>
        <div className='text-4xl w-full p-2 flex items-center justify-between'>
          <button 
          className='shadow-md p-2 rounded-md text-2xl flex items-center gap-x-2'
          onClick={()=>router.back()}>
            <FaBackward fill={'white'} size={20}/>
            Back
          </button>
          <h1 className='text-2xl p-2 uppercase xsm:max-sm:hidden'>
            {(cartItems && cartItems.length>0) ? 'Ready Your Scent Collections' : 'No current order' } 
          </h1>
          <button 
          className='shadow-md p-2 rounded-md bg-white text-black text-2xl 
          flex items-center gap-x-2 border-2 hover:bg-[#1e4548] hover:border-white hover:text-white transition-all duration-500 ease-in-out max-lg:hidden'
          onMouseEnter={()=>setUpload(true)}
          onMouseLeave={()=>setUpload(false)}
          onClick={()=>router.push('/')}>
            <FaUpload className='hover:fill-white' fill={`${upload?'white':'#1e4548'}`} size={20}/>
            Upload Order
          </button>
          <button 
          className='shadow-md p-2 rounded-md bg-white text-black text-2xl 
          flex items-center gap-x-2 border-2 hover:bg-[#1e4548] hover:border-white hover:text-white transition-all duration-500 ease-in-out max-lg:hidden'
          onMouseEnter={()=>setTrash(true)}
          onMouseLeave={()=>setTrash(false)}
          onClick={()=>router.push('/')}>
          <FaTrash className='hover:fill-white' fill={`${trash?'white':'#1e4548'}`} size={20}/>
            Delete Order
            {/* <FaForward fill={'white'} size={20}/> */}
          </button>
          <button 
          className='shadow-md p-2 rounded-md text-2xl flex items-center gap-x-2'
          onClick={()=>router.push('/product/checkout')}>
            Forward
            <FaForward fill={'white'} size={20}/>
          </button>
        </div>
        <CartSection/>
        {/* <div className='mt-24 w-full xsm:max-sm:scale-50'><Carousel/></div> */}
        <AboutFavy/>
    </div>
  )
}
