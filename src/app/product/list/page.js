import AboutLandingPage from '@/components/AboutLandingPage'
import OurProducts from '@/components/OurProducts'
import Reviews from '@/components/Reviews'
import SearchProduct from '@/components/SearchProduct'
import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets: ['latin'], weight: '400'})

export default function page() {
  return (
    <div className='bg-white container mx-auto flex flex-col min-w-[1190px] max-w-[100%]'>
        {/* <p className='text-black uppercase mt-24 container max-w-full'>ListPage</p> */}
        <div className={`${poppins.className} mt-24 mb-4 z-10`}><SearchProduct/></div>
        <div className='-mt-[210px]'><OurProducts/></div>
        <Reviews/>
        {/* <AboutLandingPage/> */}
    </div>
  )
}
