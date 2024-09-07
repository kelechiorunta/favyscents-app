import AboutLandingPage from '@/components/AboutLandingPage'
import LazyImage from '@/components/LazyImage'
import MainHeader from '@/components/MainHeader'
import React from 'react'

export default function page() {
  return (
    <div className='flex max-w-full min-h-screen flex-col items-center justify-between bg-black xsm:max-[400px]:p-2'>
        {/* <div className="container z-20 max-w-full fixed"><MainHeader/></div> */}
        <AboutLandingPage/>
        <LazyImage/>
    </div>
  )
}
