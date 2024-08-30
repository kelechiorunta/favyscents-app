'use client'
import React, { useState, useEffect, useContext, memo } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import Link from 'next/link'
import useProductScroll from './useProductScroll'
import { slideContext } from './AppContext'

const parentVariant = {
    hidden: {opacity:0, x:0},
    visible: {opacity:1, x:20, 
    transition:{staggerChildren: 0.5, duration:1}}
} 

const childVariant = {
        visible: { opacity: 1, x:0, 
        transition:{stagger:0.5}},
        hidden: { opacity: 0, x:20},    
}

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

const products = [
    {id:0, name:"CHOCO M", price:"€2,000", 
    pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
    bg-white' src={'/images/image1.png'} alt='perfume1'
    width={244} height={244} />},
    {id:1, name:"PRINCESS", price:"€3,000", 
    pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
    bg-white' src={'/images/image2.png'} alt='perfume1'
    width={244} height={244} />},
    {id:2, name:"RAYHAAN", price:"€2,500", 
    pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
    bg-white' src={'/images/image3.png'} alt='perfume1'
    width={244} height={244} />},
    {id:3, name:"DAYLAAN", price:"€2,200", 
    pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
    bg-white' src={'/images/image4.png'} alt='perfume1'
    width={244} height={244} />},
    {id:4, name:"SAHEEB", price:"€2,500", 
    pic:<Image className='rounded-md shadow-md pl-6 py-6 pr-4
    bg-white' src={'/images/image5.png'} alt='perfume1'
    width={244} height={244} />}
]

function OurProducts() {
    const { productNo } = useContext(slideContext)
    const {containerRef, parentRef, titleRef, descriptionRef, photosblog} = useProductScroll();
    const slicedproducts = products && products.slice(0,3)
    const [displayedProducts, setDisplayedProducts] = useState(slicedproducts)
    const [searchedResults, setSearchedResults] = useState("")
    const [selectedId, setSelectedId] = useState(0)

    const handlePaginate = (arr, index) => {
        const slicedArr = arr && arr.slice(index*3, (index+1)*3)
        setDisplayedProducts(slicedArr)
        setSearchedResults(`Showing ${(index*3)+1} - ${((index+1)*3 > products.length)? products.length : (index+1)*3} of ${products.length} items`)
    }

    useEffect(()=>{
        if (displayedProducts && displayedProducts.length>0){
            handlePaginate(products, Math.floor(productNo/3))
        }
    }, [productNo,  products])

  return (
    <div 
    className='container max-w-[90%] min-w-[90%] flex flex-col mx-auto items-center justify-center'>
    {/* // // ref={containerRef}> */}
    <motion.div
    //    ref={parentRef}
    //    initial="hidden"
    //    whileInView="visible"
    //    variants={parentVariant}
    //    viewport={{ once: true }}
    className='max-w-full mx-auto container flex flex-col items-center gap-8 px-8 mt-[200px] py-16
    bg-gradient-conic from-slate-600 via-slate-300 to-slate-600'>
        <h1 
        // ref={titleRef}
        className={`text-[40px] ${poppins.className} mt-4 text-center`}>OUR PRODUCTS</h1>
        <p 
        // ref={descriptionRef}
        className={`${poppins.className} -mt-4 mb-4 px-4 text-center uppercase text-2xl`}>
            Our Best Sellers Collection at 20% discount. 
        </p>
        <p  
        // ref={descriptionRef}
        className={`${poppins.className} -mt-4 mb-4 px-4 text-center text-2xl`}>
            {searchedResults}
        </p>
        <motion.div 
        initial='hidden'
        animate='visible'
        variants={parentVariant}
        className={`${photosblog} container w-[80%] flex flex-wrap gap-2 justify-evenly`}>
            {displayedProducts && displayedProducts.map((items, index) => {
                return (
                    <motion.div 
                    transition={{stagger:0.5, duration:1}}
                    variants={childVariant}
                    className={`${items.id===productNo && 'animate-bounce'} w-auto rounded-md border-white shadow-md flex flex-col `}>
                       <Link href={'#'}>{items.pic}</Link>
                      {/* <Image className='rounded-md shadow-md pl-6 py-6 pr-4 bg-white' src={'/images/image1.png'} alt='perfume1' width={244} height={244} /> */}
                        <div className={`${poppins.className} flex items-center justify-center px-4 uppercase 
                            bg-gradient-to-l text-white rounded-md
                            from-slate-900 via-zinc-700 to-slate-900`}>
                            <p className={`${poppins.className} p-auto uppercase 
                            bg-gradient-to-l text-white p-4
                            from-slate-900 via-zinc-900 to-slate-900`}>
                                {items.name}
                            </p>
                            <button className={`${poppins.className} border-white border-1
                             w-max text-center px-4 py-3 
                            rounded bg-gradient-to-r mx-auto bg-transparent
                            text-white`}>
                                Buy Now
                            </button>
                    </div>
            </motion.div>
                )
            })}
           
        </motion.div>
        <div className='flex gap-2 justify-evenly'>
           {Array.from({length:Math.ceil(products.length/3)}, (v, item) => item + 1).map((i, index) => {
              return(
                <button
                    onClick={()=>{setDisplayedProducts(products && products.slice(index*3, (index+1)*3)); 
                    setSelectedId(index); setSearchedResults(`Showing ${(index*3)+1} - ${((index+1)*3 > products.length)? products.length : (index+1)*3} of ${products.length} items`)}}
                    className={`${selectedId==index && 'selected'} ${poppins.className} 
                    flex items-center justify-center text-[20px]  p-2 w-[50px] h-[50px] rounded-full`}>
                    {index + 1}
                </button>
          )
        })}
           </div>
    </motion.div>
 </div>
  )
}

export default memo(OurProducts)