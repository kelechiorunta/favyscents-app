import React from 'react'

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

export default function page({params}) {
    const { id } = params
    const searchedProduct = products && products.find(product=>{return product.id == id})
  return (
    <div className='container max-w-full'>
        <h1>Our Product</h1>
        <div></div>
    </div>
  )
}
