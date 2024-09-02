import React from 'react'
import { Poppins } from 'next/font/google'
import AboutFavy from './AboutFavy'
import Carousel from './3D Rotating Carousel/Carousel'

const poppins = Poppins({subsets: ['latin'], weight:'400'})
export default function CartPage() {
  return (
    <div className={`${poppins.className} text-white text-center bg-gradient-to-l from-gray-900 via-zinc-600 to-gray-900 shadow-2xl flex flex-wrap gap-4 rounded-md container mx-auto min-w-full max-w-[100%] mt-20 p-4`}>
        <h1 className='text-4xl w-full p-4'>Welcome to my Cart Page</h1>
        <div className='mt-24 w-full'><Carousel/></div>
        <AboutFavy/>
    </div>
  )
}
