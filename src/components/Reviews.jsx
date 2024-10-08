'use client'
import React, { useContext, memo } from 'react'
import Slider from '@/app/Slider'
import { Poppins } from 'next/font/google'
import { FaReact } from 'react-icons/fa'
import { slideContext } from './AppContext'
import { useMemo } from 'react'

const poppins = Poppins({subsets:['latin'], style:'italic', weight:'400'})

const slides = [{
    id:0, heroPic: <img
    className='rounded-full mx-auto h-[200px] w-[200px] bg-cover p-4 border-1 border-black shadow-2xl'
    fetchPriority='high'
    width={144}
    height={144}
    src={'/images/client1.jpg'} 
    alt='perfume1' />,
    testimonial: <p
    className={`${poppins.className} text-[15px] text-white text-center`}>
        Classic Scent. Scent that lasts longer than flowers.
        Even Nature agrees with FavyScent.
    </p>,
    client:<p
    className={`${poppins.className} text-xl text-green-700 text-center uppercase`}>
        - Favour Simeon
    </p>},

    {id:1, heroPic: <img
    className='rounded-full mx-auto w-[200px] h-[200px] p-4 bg-cover border-1 border-black shadow-2xl'
    fetchPriority='hight'
    width={144}
    height={144}
    src={'/images/client2.jpg'} 
    alt='perfume1' />,
    testimonial: <p
    className={`${poppins.className} text-[15px] text-white text-center`}>
        I love the sweet scent of your perfumes. Such an exceptional and long-lasting 
        experience. It gave me such confidence and boost in public. I cannot imagine
        doing away with this new touch of upgrade in such a fantastic product.
    </p>,
    client:<p
    className={`${poppins.className} text-xl text-green-700 text-center uppercase`}>
        - Cynthia H.
    </p>},

    {id:2, heroPic: <img
        className='rounded-full shadow-2xl mx-auto w-[200px] h-[200px] bg-cover p-4 border-1 border-black'
        fetchPriority='high'
        width={144}
        height={144}
        src={'/images/client3.jpg'} 
        alt='perfume1' />,
    testimonial: <p
    className={`${poppins.className} text-[15px] text-white text-center`}>
        Such an amazing stuff. Bright long-lasting and freshens every mood of my day.
        Thumbs up for FavyScent.
    </p>,
    client:<p
    className={`${poppins.className} text-xl text-green-700 text-center uppercase`}>
        - John Cole.
    </p>},
    ]

function Reviews() {

    const slide = useContext(slideContext)
    const {slideNo, setSlideNo} = slide

    const memoslideNo = useMemo(()=>{
        return slideNo
    },[slideNo])

  return (
    <div className="container max-w-full relative">
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <clipPath id="curveClipPath" clipPathUnits="objectBoundingBox">
          {/* Example path with curves (Bezier) */}
          <path d="M 1,0 L 0,0.9 C 0.8,0.8 1,1 1,0.8 L 1,0 L 0,1 Z" />
        </clipPath>
      </defs>
    </svg>
    <div 
    style={{ clipPath: 'url(#curveClipPath)' }}
    className='container pt-8 pb-24 max-w-full rounded-xl flex flex-col mt-[50px]
     bg-gradient-to-b from-slate-200 via-zinc-500 to-black xsm:max-[400px]:gap-y-8'>
        <h1 className={`${poppins.className} mx-auto py-4 text-center container text-[40px] uppercase`}>
            WHAT SAYS CUSTOMERS
        </h1>
        <div className='mx-auto w-full'>
            <Slider slides={slides} seconds={10000} componentName="Reviews"/>
        </div>
        <div className='flex container mx-auto w-auto -mt-4 pb-8'>
        {Array.from({length:Math.ceil(slides.length)}, (v, item) => item + 1).map((i, index) => {
              return(
                <button
                key={index}
                    onClick={()=>{ setSlideNo(index)}}
                    className={`${memoslideNo===index? 'selected' : ' bg-white'} ${poppins.className} mx-2
                    flex items-center justify-center text-[20px] p-2 w-[20px] h-[20px] rounded-full`}>
                    {/* {index + 1} */}
                </button>
          )
        })}
    </div>
    </div>
    </div>
  )
}
export default memo(Reviews)