'use client'
import Image from 'next/image'
import React from 'react'
import Slider from '../app/Slider'
import Typer from './Typer'
import { Poppins } from 'next/font/google'

const slides = [{
    id:0, heroPic: <img
    className='rounded-md w-full h-full'
    fetchPriority='high'
    width={144}
    height={144}
    src={'/images/image1.png'} 
    alt='perfume1' />},

    {id:1, heroPic: <img
    className='rounded-md w-full h-full'
    fetchPriority='hight'
    width={144}
    height={144}
    src={'/images/image2.png'} 
    alt='perfume2' />},

    {id:2, heroPic: <img
        className='rounded-md w-full h-full'
        fetchPriority='high'
        width={144}
        height={144}
        src={'/images/image3.png'} 
        alt='perfume3' />}
]

const texts = ["Our FavyScents", "Our Future"]

const poppins = Poppins({subsets:['latin'], style:'italic', weight:'400'})

export default function AboutFavy() {
  return (
    <div className='max-w-full p-8 mt-[200px] grid grid-cols-2 shadow-md rounded container 
    bg-gradient-to-tr from-green-600 via-slate-700 to-black
    max-lg:grid-cols-1'>
        <div className='shadow-md rounded py-4 pl-16'>
            <h1 className=' flex flex-col gap-2 items-start'>
                {/* <p className='text-7xl'>Welcome to </p> */}
                <h1 className={`${poppins.className} text-4xl text-white uppercase`}>
                    ABOUT OUR BEAUTY SOTORE
                </h1>
                {/* <Typer texts={texts} time={3000} speed={90}/> */}
                <p className={`${poppins.className} py-4 text-white`}>
                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequatlabore et dolore 
                     magna aliqua. Ut enim ad minim veniam, quis nostrud
                     exercitation ullamco laboris nisi ut aliquip ex ea
                     commodo consequatlabore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation 
                     ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat
                </p>
                <button 
                className={`${poppins.className} p-4 w-max
                 text-white rounded-md shadow-md bg-gradient-to-l
                  from-slate-900 via-slate-700 to-slate-900`}>
                    READ MORE
                </button>
            </h1>
        </div>
        <div className='p-4 shadow-md rounded mx-auto w-auto overflow-hidden bg-white'>
            <Slider slides={slides}/>
        </div>
    </div>
  )
}