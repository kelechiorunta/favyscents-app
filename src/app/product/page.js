import React from 'react'
import Link from 'next/link'
import AboutLandingPage from '@/components/AboutLandingPage'

export default function page() {
  return (
    <div className='flex container mx-auto max-w-full gap-y-8 min-h-screen flex-col items-center justify-between'>
        <AboutLandingPage/>
    </div>
  )
}
