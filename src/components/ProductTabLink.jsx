'use client'
import React, {useState, useContext} from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaShopify, FaSpinner, FaCartPlus } from 'react-icons/fa'
import { slideContext } from './AppContext'



export default function ProductTabLink({path, children}) {
  // const segment = useSelectedLayoutSegment()
  const pathname = usePathname()
  const isActive = (pathname==path)
  const { productNo, setProductNo } = useContext(slideContext)

  // const activeIcon = (pathname, isActive) => {
  //   if ((pathname=='/product') && isActive ){
  //     return <FaHome fill={'white'} size={20}/>
  //   } else if (pathname==='/product/list' && isActive){
  //     return <FaCartPlus fill={'white'} size={20}/>
  //   }
  //   // return <FaHome fill={isActive && 'white'} size={20}/> || <FaCartPlus fill={!isActive && 'black'} size={20}/>
  // }

  return (
    <Link 
      className={`${isActive && 'text-white font-extrabold animate-pulse'}
      flex items-start relative justify-start gap-x-2 w-full uppercase p-2 shadow-2xl text-center border-1 border-black text-black bg-gradient-to-b from-gray-700 via-gray-400 to-gray-700 rounded`}
      href={`${path}`}>
      {/* <div className='flex gap-x-2'>{activeIcon(pathname, isActive)} {children}</div> */}
      {children}
      {pathname==='/product/list' && isActive &&
      <ul className='absolute z-10 top-20 flex flex-col py-8 px-4 rounded-md
      bg-gradient-conic from-black via-slate-700  to-black 
      items-start justify-start mx-auto gap-y-1 w-[100%] -ml-2 text-[13px]'>
        <li 
        onClick={()=>setProductNo(0)}
        className={` flex gap-2 items-start rounded-md p-2 w-full border-2 border-transparent text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-700`}>
          <FaShopify fill='white' size={20}/> CHOCO MUSK {productNo===0 && <FaSpinner fill='white' size={20} className='animate-spin'/>}
        </li>
        <li 
        onClick={()=>setProductNo(1)}
        className='flex gap-2 items-start rounded-md p-2 w-full border-2 border-transparent text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-700'>
          <FaShopify fill='white' size={20}/> CASTLE PRINCESS {productNo===1 && <FaSpinner fill='white' size={20} className='animate-spin'/>}
        </li>
        <li 
        onClick={()=>setProductNo(2)}
        className='flex gap-2 items-start rounded-md p-2 w-full border-2 border-transparent text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-700'>
          <FaShopify fill='white' size={20}/> RAYHAAN {productNo===2 && <FaSpinner fill='white' size={20} className='animate-spin'/>}
        </li>
        <li 
        onClick={()=>setProductNo(3)}
        className='flex gap-2 items-start rounded-md p-2 w-full border-2 border-transparent text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-700'>
          <FaShopify fill='white' size={20}/> DAYLAAN {productNo===3 && <FaSpinner fill='white' size={20} className='animate-spin'/>}
        </li>
        <li 
        onClick={()=>setProductNo(4)}
        className='flex gap-2 items-start rounded-md p-2 w-full border-2 border-transparent text-white bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-700'>
          <FaShopify fill='white' size={20}/> SAHEEB {productNo===4 && <FaSpinner fill='white' size={20} className='animate-spin'/>}
        </li>
        </ul>}
    </Link>
  )
}

