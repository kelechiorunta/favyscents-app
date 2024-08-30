import AboutLandingPage from '@/components/AboutLandingPage'
import MainHeader from '@/components/MainHeader'
import React from 'react'

export default function page() {
  return (
    <div className='flex max-w-full min-h-screen flex-col items-center justify-between bg-black'>
        {/* <div className="container z-20 max-w-full fixed"><MainHeader/></div> */}
        <AboutLandingPage/>
    </div>
  )
}
