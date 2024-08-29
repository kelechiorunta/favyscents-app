import React from 'react'
import Slider from '@/app/Slider'
import { Poppins } from 'next/font/google'
import { FaReact } from 'react-icons/fa'

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

export default function Reviews() {
  return (
    <div className='container p-8 max-w-full flex flex-col mt-[200px] bg-gradient-to-b from-slate-200 via-zinc-500 to-black'>
        <h1 className={`${poppins.className} mx-auto py-4 text-center container text-[40px] uppercase`}>
            WHAT SAYS CUSTOMERS
        </h1>
        <div className='mx-auto w-full'>
            <Slider slides={slides} seconds={10000}/>
        </div>
    </div>
  )
}
