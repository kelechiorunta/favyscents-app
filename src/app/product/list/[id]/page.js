'use client'
import SelectedProduct from '@/components/SelectedProduct'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'
import { motion, stagger } from 'framer-motion'
import { FaArrowCircleRight, FaArrowCircleLeft, FaStar } from 'react-icons/fa'
import Link from 'next/link'

const poppins = Poppins({subsets:['latin'], weight:'400'})

export default function page({params}) {
    const { id } = params

    const products = [
      {id:0, name:"CHOCO M", price:"€2,000", rating:3, 
      pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
      bg-white' src={'/images/image1.png'} blurImg={'/images/small-image1.png'} alt='perfume1'
      width={544} height={544} />},
      {id:1, name:"CASTLE PRINCESS", price:"€3,000", rating:5,
      pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
      bg-white' src={'/images/image2.png'}blurImg={'/images/small-image2.png'}  alt='perfume1'
      width={544} height={544} />},
      {id:2, name:"RAYHAAN", price:"€2,500", rating:3,
      pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
      bg-white' src={'/images/image3.png'} blurImg={'/images/small-image3.png'} alt='perfume1'
      width={544} height={544} />},
      {id:3, name:"DAYLAAN", price:"€3,200", rating:4,
      pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
      bg-white' src={'/images/image4.png'} blurImg={'/images/small-image4.png'} alt='perfume1'
      width={544} height={544} />},
      {id:4, name:"SAHEEB", price:"€3,500", rating:5,
      pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
      bg-white' src={'/images/image5.png'} blurImg={'/images/small-image5.png'} alt='perfume1'
      width={544} height={544} />}
  ]
    const [searchedProduct, setSearhedProduct] = useState(null)
    
    useEffect(()=>{
      if (id && id.length>=0){
        setSearhedProduct(products[id])
      }
    }, [])
    

  return (
    <motion.div
      initial={{ x: 0, y: '-100%', opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 }}

     className={`${poppins.className} container rounded-md mx-auto min-w-[90%] max-w-[90%]
      border-2 border-black mt-24 flex flex-col gap-x-4 xsm:max-md:max-w-full xsm:max-md:-mt-0`}>
 
        <div className='flex items-center justify-between'>
          
            <div className='flex items-center bg-gradient-to-t
              from-black via-zinc-800 text-white to-slate-800 rounded-md shadow-2xl
              gap-x-2 py-2 px-4'>
              Back to List
              <Link className='flex items-center gap-2' 
              href={'/product/list'}>
                <FaArrowCircleLeft fill='white' className='animate-pulse' size={20}/>
              </Link>
            </div>

          <h1 className='py-2 px-4 uppercase font-bold text-xl xsm:max-sm:hidden'>{products[id].name} </h1>
          
          <div className='flex items-center bg-gradient-to-t
          from-black via-zinc-800 text-white to-slate-800 rounded-md shadow-2xl
           gap-x-2 py-2 px-4'>
            Proceed to Cart
            <Link className='flex items-center gap-2' 
            href={'/product/cart'}>
              <FaArrowCircleRight fill='white' className='animate-ping' size={20}/>
            </Link>
          </div>
          
        </div>

        <motion.div className='container max-w-full '>
            <SelectedProduct product={searchedProduct && searchedProduct}/>
        </motion.div>
        
        
    </motion.div>
  )
}
