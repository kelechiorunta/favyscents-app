'use client'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const parentVariant = {
    hidden: { x: 0, y: '-100%', opacity: 0 },
    visible:{ x: 0, y: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.75, staggerChildren: 0.5 } },
   }

export default function SelectedProduct({product}) {

  return (
    <motion.div
    className='container text-white max-w-[100%] w-auto bg-gradient-conic
     from-zinc-950 via-slate-600 to-zinc-950 xsm:max-md:max-w-full'>
        
                <div className='gap-4 p-8 flex flex-wrap justify-evenly items-start border-2 border-black w-[100%]
                '>
                    <div className='container mx-auto min-w-[45%] max-w-[45%] border-black shadow-2xl rounded
                    xsm:max-md:max-w-full'>
                        {product && product.pic}
                    </div>
                    <div className='p-4 flex flex-col gap-4 container mx-auto min-w-[45%]
                    bg-gradient-conic from-black via-slate-800 to-black max-w-[45%]
                     border-white border-1 shadow-2xl rounded xsm:max-md:max-w-full'>
                        <h1 className='container text-5xl'>{product && product.name}</h1>
                        <h1 className='container text-3xl'>{product && product.price}</h1>
                        <p className='container '>
                            Aliquam vel maximus nulla. 
                            Etiam viverra nulla ac tellus auctor tempus.
                            Donec euismod commodo mi, ac auctor tortor 
                            aliquam in diam porta hendrerit in id orci.
                            Aliquam vel maximus nulla. 
                        </p>
                        <p className='container '>
                            
                            Etiam viverra nulla. Aliquam vel maximus nulla fillouts
                        </p>
                        <ul className='flex flex-wrap gap-y-4 gap-x-4'>
                            <li className='flex gap-x-2 items-start'>
                                <FaCheckCircle fill='green' size={20}/>
                                Standard Shipping $8
                            </li>
                            <li className='flex gap-x-2 items-start'>
                                <FaCheckCircle fill='green' size={20}/>
                                Express Shipping
                            </li>
                            <li className='flex gap-x-2 items-start'>
                                <FaCheckCircle fill='green' size={20}/>
                                1 - 2 days Shipping
                            </li>
                            <li className='flex gap-x-2 items-start'>
                                <FaCheckCircle fill='green' size={20}/>
                                Free Shipping
                            </li>
                            {/* <li className='flex gap-x-2 items-start'>
                                <FaCheckCircle fill='green' size={20}/>
                                30 days easy returns
                            </li> */}
                        </ul>
                        <motion.ul
        initial='hidden'
        animate='visible'
        variants={parentVariant}
        className='flex gap-x-2'>
        {Array.from({length:5}, (_, index) => {
            return (
              <motion.div
              transition={{stagger:0.3, duration:0.5}}
              variants={parentVariant}
              className='flex gap-x-2'>
                <FaStar fill={index<((product && product.rating))?'green':'white'} size={20}/>
              </motion.div>
            
            )
        })
       } 
        </motion.ul>
                        <button className='px-4 py-3 rounded bg-gradient-to-b
                        from-gray-900 via-zinc-600 to-gray-900
                         uppercase shadow-md text-white'>
                            Buy Now
                        </button>
                    </div>
                </div>
        
    </motion.div>
  )
}
