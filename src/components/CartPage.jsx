'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import AboutFavy from './AboutFavy'
import Carousel from './3D Rotating Carousel/Carousel'
import CartSection from './CartSection'
import { useRouter } from 'next/navigation'
import { FaBackward, FaForward } from 'react-icons/fa'

const poppins = Poppins({subsets: ['latin'], weight:'400'})
export default function CartPage() {
  const router = useRouter();
  return (
    <div className={`${poppins.className} text-white text-center bg-gradient-to-l from-gray-900 via-zinc-600 to-gray-900 shadow-2xl flex flex-wrap gap-4 rounded-md container mx-auto min-w-full max-w-[100%] mt-20 p-4`}>
        <div className='text-4xl w-full p-4 flex items-center justify-between'>
          <button 
          className='shadow-md p-4 rounded-md text-2xl flex items-center gap-x-2'
          onClick={()=>router.back()}>
            <FaBackward fill={'white'} size={20}/>
            Back
          </button>
          <h1 className='text-2xl p-4'>
            Ready Your Scent Collections 
          </h1>
          <button 
          className='shadow-md p-4 rounded-md text-2xl flex items-center gap-x-2'
          onClick={()=>router.push('/product/checkout')}>
            <FaForward fill={'white'} size={20}/>
            Forward
          </button>
        </div>
        <CartSection/>
        <div className='mt-24 w-full'><Carousel/></div>
        <AboutFavy/>
    </div>
  )
}
