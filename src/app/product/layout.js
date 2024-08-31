'use client'
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import ProductTabLink from '@/components/ProductTabLink'
import { FaCartPlus, FaHome, FaList } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
// import Template from '../template'
import ProductTemplate from './template'


const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

export default function ProductLayout({children}) {
     const pathname = usePathname()
  return (
    <div className='container mx-auto min-w-[90%] max-w-[100%] flex bg-white overflow-hidden'>
        <div className={`${poppins.className}
         container min-w-[250px] max-w-[250px] bg-gradient-to-t from-gray-900 via-silver-400 to-gray-900
        rounded-md gap-x-4 gap-y-3 px-4 py-8 mt-20 text-white flex flex-col`}>
            <ProductTabLink path={'/product'}><FaHome fill={pathname==='/product'? 'white' : 'black'} size={20}/> Product Home Page</ProductTabLink>
            <ProductTabLink path={'/product/list'}><FaList fill={pathname==='/product/list'? 'white' : 'black'} size={20}/> Product List</ProductTabLink>
            <ProductTabLink path={'/product/cart'}><FaCartPlus fill={pathname==='/product/cart'? 'white' : 'black'} size={20}/> Cart Page</ProductTabLink>
        </div>
        <ProductTemplate>
            {/* <div className='max-w-full container mx-auto flex justify-center items-center'> */}
                {/* <Template> */}
                    {children}
                {/* </Template> */}
                
            {/* </div> */}
        </ProductTemplate>
            
            {/* {console.log(children?.props?.segmentPath)} */}
    </div>
  )
}
