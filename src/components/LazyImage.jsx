'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({subsets: ['latin'], weight:'400'})
const perfumes = [
    {id:0, pic: '/images/image1.png'},
    {id:1, pic: '/images/image2.png'},
    // {id:2, pic: '/images/image3.png'},
    // {id:3, pic: '/images/image4.png'},
    // {id:4, pic: '/images/image5.png'},
]


const LazyImage = () => {
    const [opac, setOpac] = useState(false);
    
    return (
        <div className={`${poppins.className} mt-16 rounded-md bg-gradient-to-t from-black via-slate-400 to-black 
        mx-auto flex container px-8 py-16 flex-wrap max-w-[90%] min-w-[90%] gap-2 max-md:flex-col xsm:max-md:p-2 xsm:max-md:max-w-full xsm:max-md:ml-0`}>

            <div className='rounded-md shadow-black shadow-xl p-4 w-[45%] flex flex-col gap-2 bg-white xsm:max-lg:w-full xsm:max-md:ml-0'>
                <h1 className='text-5xl p-4 xsm:max-sm:text-4xl xsm:max-sm:p-2'>
                    About FavyScents
                </h1>
                <p className='text-[#737a7add] p-4'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi nostrum est magnam, in perferendis adipisci iusto facilis neque officiis? Voluptatem quam eligendi, iste tempore quia doloribus reprehenderit recusandae quasi iure?
                    Voluptates cumque nostrum pariatur ipsam voluptatum. Distinctio pariatur recusandae error laudantium facere veniam blanditiis consectetur illo minima voluptatibus temporibus libero, sequi laboriosam repellat facilis magni, nostrum quis accusantium. Nulla, commodi!
                    Ut eum beatae ratione accusantium nobis incidunt deleniti inventore quaerat est dicta! Molestias tempora dolore, aspernatur dolorum at pariatur id aut fugit laudantium dolor esse, voluptates, soluta modi corporis laboriosam.
                    Magnam sapiente itaque distinctio, nulla veritatis natus exercitationem! Molestias temporibus veritatis ipsam deleniti nesciunt aut quasi ab accusamus quod quibusdam! Sunt eaque dicta ad hic atque! Ipsa saepe excepturi ratione?
                    Voluptas cupiditate quia odio tempore asperiores cum vitae vel iure illo culpa nostrum nam, aliquid hic aliquam id quo omnis dolores eos, maiores deleniti. Magni ipsum eum at voluptatum voluptatem.
                </p>
            </div>
       
        <div className='w-[50%] flex flex-wrap gap-2 px-2 py-8 bg-white rounded-md shadow-black shadow-xl xsm:max-lg:min-w-full'>
            {perfumes && perfumes.map((perfume) => {
                 return (
                 <div className={`relative m-auto container max-w-[40%] min-w-[70%] bg-cover bg-center bg-[url(/images/small-image${perfume.id + 1}.png)]`}>
                
                 {/* High-resolution image with fade-in effect */}
                 <Image
                 className={`container w-full mx-auto max-w-full min-w-full bg-center bg-cover transition-opacity duration-1000 ease-in-out ${opac ? 'opacity-100' : 'opacity-0'}`}
                 onLoad={() => setOpac(true)}
                 src={perfume.pic}
                 alt='high-resolution logo'
                 width={100}
                 height={100}
                 loading='lazy'
                 />
             </div>
                 )
            })}   
      </div>

      </div>
    );
  };
  

export default LazyImage;
