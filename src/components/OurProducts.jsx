'use client'
import React, { useState, useEffect, useContext, memo, useRef, useCallback, useMemo } from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import Link from 'next/link'
import useProductScroll from './useProductScroll'
import { slideContext } from './AppContext'
import { useSelectedLayoutSegment } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { addtoCart } from '@/utils/redux/SliceReducer'
import { removefromCart } from '@/utils/redux/SliceReducer'
import { subtractfromCart } from '@/utils/redux/SliceReducer'
import { updateCart } from '@/utils/redux/thunk'
import { gsap } from 'gsap/all'
import { FaBuyNLarge, FaBuysellads, FaCartPlus, FaProductHunt, FaSalesforce } from 'react-icons/fa'



const parentVariant = {
    hidden: {opacity:0, x:-20, y:-200},
    visible: {opacity:1, x:0, y:0,
    transition:{staggerChildren: 0.2, duration:0.3, }}
} 

const slideVariant = {
    hidden: {opacity:0, x:-20, y:-200},
    visible: {opacity:1, x:0, y:0,
    transition:{staggerChildren: 0.2, duration:0.3, repeatType:'reverse', repeat:Infinity }}
} 

const childVariant = {
        visible: { opacity: 1, x:0, 
        transition:{stagger:0.5}},
        hidden: { opacity: 0, x:20},    
}

const poppins = Poppins({subsets:['latin'], style:'normal', weight:'400'})

const products = [
    {id:0, name:"CHOCO", price:"€2,000", picture:'/images/image1.png',
    pic:<Image priority='high' fetchPriority='high' className=' mx-auto rounded-md shadow-md py-1 px-1 hover:scale-125 transition-all duration-700 ease-in-out
    bg-white' src={'/images/image1.png'} alt='perfume1'
    width={244} height={244} />},
    {id:1, name:"PRINCESS", price:"€3,000", picture:'/images/image2.png',
    pic:<Image priority='high' fetchPriority='high' className='mx-auto rounded-md shadow-md py-1 px-1 hover:scale-125 transition-all duration-700 ease-in-out
    bg-white' src={'/images/image2.png'} alt='perfume1'
    width={244} height={244} />},
    {id:2, name:"RAYHAAN", price:"€2,500", picture:'/images/image3.png',
    pic:<Image priority='high' fetchPriority='high' className='mx-auto rounded-md shadow-md py-1 px-1 hover:scale-125 transition-all duration-700 ease-in-out
    bg-white' src={'/images/image3.png'} alt='perfume1'
    width={244} height={244} />},
    {id:3, name:"DAYLAAN", price:"€2,200", picture:'/images/image4.png',
    pic:<Image priority='high' fetchPriority='high' className='mx-auto rounded-md shadow-md py-1 px-1 hover:scale-125 transition-all duration-700 ease-in-out
    bg-white' src={'/images/image4.png'} alt='perfume1'
    width={244} height={244} />},
    {id:4, name:"SAHEEB", price:"€2,500", picture:'/images/image5.png',
    pic:<Image priority='high' fetchPriority='high' className='mx-auto rounded-md shadow-md py-1 px-1 hover:scale-125 transition-all duration-700 ease-in-out
    bg-white' src={'/images/image5.png'} alt='perfume1'
    width={244} height={244} />}
]

function OurProducts() {
    const cartItems = useSelector((state) => state.cartReducer.cart, shallowEqual);
    const dispatch = useDispatch();
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const segment = useSelectedLayoutSegment();
    const pathname = usePathname();
    const productsRef = useRef([]);
    const isListSegment = pathname === '/product/list' || segment === 'list';
    const productContext = useContext(slideContext);
    const [displayedProducts, setDisplayedProducts] = useState(products);
    const [searchedResults, setSearchedResults] = useState("");
    const [selectedId, setSelectedId] = useState(0);
    const [cartId, setCartId] = useState(null);
    // const [cart_quantity, setCartQuantity] = useState(null)
    const [cartQuantity, setCartQuantity] = useState(0);

  
    const { productNo, setProductNo } = productContext;

    const memoizedcartItems = useMemo(() => {
        return cartItems;  // Return the value to memoize
    }, [cartItems]);
  
    useEffect(() => {
      console.log('hello');
    }, []);
  
    const handlePaginate = useCallback((arr, index) => {
      const slicedArr = arr.slice(index * 3, (index + 1) * 3);
      setDisplayedProducts(slicedArr);
      setSearchedResults(
        `Showing ${(index * 3) + 1} - ${((index + 1) * 3 > products.length) ? products.length : (index + 1) * 3} of ${products.length} items`
      );
    }, []);
  
    const handleProductRef = useCallback((index) => {
      const activeProduct = productsRef.current[index];
      if (activeProduct) {
        activeProduct.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    }, [productsRef.current, productNo]);
  
    useEffect(() => {
      handleProductRef(productNo);
    }, [productsRef.current, productNo]);
  
    const memoizedCartItems = useMemo(() => cartItems, [cartItems]);

    const handleCartAction = useCallback((item, action) => {
      const { id, name, price, picture, quantity } = item;
      setCartId(id);  // Only the selected item updates
      dispatch(action({ id, name, price, picture }));
      setCartQuantity(quantity);
    }, [dispatch]);
  
    const handleCartAdd = useCallback((item) => {
      handleCartAction(item, addtoCart);
      setCartQuantity(item.quantity);  // Ensure only the selected item updates
    }, [handleCartAction]);
  
    const handleCartRemoval = useCallback((item) => {
      handleCartAction(item, subtractfromCart);
    }, [handleCartAction]);
  
    const handleCartAnimation = useCallback((item) => {
      if (item) {
        setCartId(item.id);
      }
    }, []);

    const getSelectedCart = (arr, items, id) => {
        const foundSelectedCart = arr && arr.find(item=>{return item.id === items.id})
        return foundSelectedCart?.quantity
    }

    const getNonSelectedCart = (arr, items, id) => {
        const foundSelectedCart = arr && arr.map(item=>{return item.id == id})
        return foundSelectedCart[0]?.quantity
    }
  
    const slidetexts = `Your Choicest Brands`;
  
    return (
        <div className="relative">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <clipPath id="curveClipPath" clipPathUnits="objectBoundingBox">
              {/* Example path with curves (Bezier) */}
              <path d="M 0,0 L 0,0.9 C 0.8,0.8 1,1 1,0.8 L 1,0 L 0,0 Z" />
            </clipPath>
          </defs>
        </svg>
      <div 
      style={{ clipPath: 'url(#curveClipPath)' }}
      className={`container pb-24 ${isListSegment ? 'max-w-[95%] min-w-[95%]' : 'max-w-[90%] min-w-[90%]'} flex flex-col mx-auto items-center justify-center
       xsm:max-[400px]:max-w-[400px] xsm:max-[400px]:p-2 ${isListSegment && 'xsm:max-[400px]' ? 'mt-8' : 'mt-4'}`}>
        
        
        <motion.div
          className='max-w-full mx-auto container flex flex-col items-center gap-8 px-8 mt-[200px] py-16
          bg-gradient-conic from-slate-600 via-slate-300 to-slate-600 xsm:max-[400px]:p-2 xsm:max-[400px]:max-w-[400px]'>
          <h1 className={`text-[40px] ${poppins.className} mt-4 text-center xsm:max-[400px]:text-3xl`}>{!isListSegment ? 'OUR PRODUCTS' : 'COLLECTIONS'}</h1>
          {isListSegment && (
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={parentVariant}
              transition={isAnimationComplete && { duration: 2, ease: 'backInOut' }}
              style={{ color: isAnimationComplete ? 'green' : 'black', scale: isAnimationComplete && innerWidth>700 ? 1.2 : 1.0 }}
              onAnimationComplete={() => setIsAnimationComplete(true)}
              className={`curveClipPath ${poppins.className} -mt-4 text-center w-full text-2xl uppercase xsm:max-[400px]:scale-10
               xsm:max-[400px]:leading-1 xsm:max-[400px]:text-xl`}
            >
              {slidetexts.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={parentVariant}
                  transition={{ duration: 0.1, stagger: 0.3, repeat: Infinity, repeatType: "reverse" }}
                  style={{ display: 'inline-block', letterSpacing: '0.5rem' }}
                  className='animate-pulse leading-8 xsm:max-[400px]:scale-10 xsm:max-[400px]:leading-1'
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          )}
            {/* {console.log(memoizedValues)} */}
          <p className={`${poppins.className} -mt-4 mb-4 px-4 text-center uppercase text-2xl`}>
            {!isListSegment && 'Our Best Sellers Collection at 20% discount.'}
          </p>
          <p className={`${poppins.className} -mt-4 mb-4 px-4 text-center text-2xl`}>
            {!isListSegment && searchedResults}
          </p>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={parentVariant}
            className={`container ${isListSegment ? 'max-w-[98.5%] min-w-[98.5%]' : 'max-w-[99%]'}min-h-[90%] max-h-[300px] items-center flex flex-nowrap px-1 shadow-2xl rounded-md overflow-hidden
             gap-x-1 justify-evenly ${isListSegment && '-mt-12'} xsm:max-[400px]:overflow-x-scroll`}>
            {products && products.map((items, index) => {
              return (
                <motion.div
                  ref={(el) => (productsRef.current[index] = el)}
                  transition={{ stagger: 0.5, duration: 1 }}
                  variants={childVariant}
                  className={`${items.id === productNo && 'animate-bounce'} relative w-auto rounded-md border-white shadow-md flex flex-col `}>
                  <Link className='overflow-hidden' onClick={() => { items.id === productNo && setProductNo(null) }} href={`/product/list/${items.id}`}>{items.pic}</Link>
                  <div className={`${poppins.className} flex items-center justify-center px-4 uppercase 
                      bg-gradient-to-l text-white rounded-md
                      from-slate-900 via-zinc-700 to-slate-900`}>
                    <p className={`${poppins.className} p-auto uppercase 
                      bg-gradient-to-r text-white px-3 py-2 absolute top-0 rounded
                      from-slate-900 via-black to-slate-900`}>
                      {items.name}
                    </p>
                    <button
                    onClick={()=>{handleCartAnimation(items); handleCartRemoval(items); }}
                      className={`${poppins.className} relative border-white border-1 w-max text-center px-4 py-3 
                      rounded bg-gradient-to-r -ml-4 mx-auto bg-transparent text-white`}>
                      {isListSegment ? '-' : '-'}
                    </button>
                    <button
                    onClick={()=>{()=>{setCartId(items.id)}; handleCartAnimation(items); handleCartAdd(items); }}
                      className={`${poppins.className} relative border-white border-1 w-max text-center px-4 py-3 
                      -ml-4 rounded bg-gradient-to-r mx-auto bg-transparent text-white`}>
                      {isListSegment ? <FaCartPlus fill={'white'} size={20}/> : 'Add To Cart'}
                        {/* {quantity} */}
                      { 
                        <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={parentVariant}
                        className='w-[50px] h-[50px] bg-black absolute bottom-[67%] left-[70%] text-white rounded-full items-center justify-center flex'>
                    
                    { 
                    <motion.h1
                        className='w-max rounded-full shadow-md text-[1rem] bg-black text-white p-2 items-center justify-center flex'
                        variants={childVariant}
                        >
                            {(memoizedCartItems && (cartId === items.id)) ?  memoizedcartItems.find(item=>{return item.id == cartId})?.quantity :  memoizedcartItems.find(item=>{return item.id == items.id})?.quantity}
                            {/* {(memoizedcartItems && (cartId==items.id)) ? (memoizedcartItems[cartId]?.quantity ) : memoizedcartItems[items.id]?.quantity} */}
                            {/* {(cartid && (cartid === items.id)) ? cartItems && cartItems[cartid]?.quantity : cartItems[items.id]?.quantity} */}
                            {console.log(cartId, cartItems)}
                        </motion.h1>
                    }
                        
                        </motion.div>} 
                    </button>
                    
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
          <div className='flex gap-2 justify-evenly'>
            {Array.from({ length: Math.ceil(products.length / 3) }, (v, item) => item + 1).map((i, index) => {
              return (
                <button
                  onClick={() => {
                    handleProductRef(index*4)
                    // setDisplayedProducts(products && products.slice(index * 3, (index + 1) * 3));
                    setSelectedId(index);
                    // setSearchedResults(`Showing ${(index * 3) + 1} - ${((index + 1) * 3 > products.length) ? products.length : (index + 1) * 3} of ${products.length} items`);
                  }}
                  className={`${selectedId == index && 'selected'} ${poppins.className} 
                      flex items-center justify-center text-[20px] p-2 w-[50px] h-[50px] rounded-full`}>
                  {index + 1}
                </button>
              )
            })}
          </div>
        </motion.div>
        
        
      </div>
      </div>
    )
  }
  
  export default memo(OurProducts);
  