import React, { useMemo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Image from 'next/image';
import { addtoCart, removefromCart } from '@/utils/redux/SliceReducer';

export default function CartSection() {
    const cartItems = useSelector((state) => state.cartReducer.cart, shallowEqual);
    const dispatch = useDispatch()
    const memoizedValues = useMemo(()=>{
        cartItems
    }, [cartItems])

    function parseCurrency(value) {
        // Remove the currency symbol and commas
        const cleanedValue = value.replace(/[€,]/g, '');
        // Convert to number
        return parseFloat(cleanedValue);
      }

    function formatCurrency(number, currencySymbol = '€') {
        // Format the number to a string with two decimal places and commas
        const formattedNumber = number.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
    });  
        // Add the currency symbol back to the formatted number
        return `${currencySymbol}${formattedNumber}`;
     }

     const increment = (item) => {
        const { id, name, price, picture } = item

        dispatch(addtoCart({id, name, price, picture}))
     }

     const decrement = (item) => {
        const { id, name, price, picture } = item

        dispatch(removefromCart({id, name, price, picture}))
     }

     const sum = (arr) => {
        // Ensure the array is not null or undefined and calculate the sum
        const sumTotal = arr && arr.reduce((total, items) => {
            // Add the parsed price to the running total
            return total + (parseCurrency(items.price ) * items.quantity);
        }, 0); // Initialize the total to 0
    
        return sumTotal;
    };
    

  return (
    <div className='container max-w-full flex flex-col gap-4 xsm:max-md:max-w-full'>
        {console.log(memoizedValues)}
        <ul className='container flex flex-col justify-evenly shadow-xl rounded-md
         bg-white text-black xsm:max-md:max-w-full'>
        {cartItems && cartItems.map(items=>{
            return(
                <div className='container min-w-[90%] max-w-[90%] mx-auto gap-2 items-center 
                justify-between p-4 shadow-md flex xsm:max-md:max-w-full'>
                    <div className='container flex justify-start'>
                        <Image width={144} height={144} src={items.picture} alt="pic"/>
                    </div>
                    <div className='container flex flex-col items-start justify-start py-2'>
                        <p className='w-full text-left font-bold text-xl'>{items.name}</p>
                        <p className='w-full text-left'>Quantity: {items.quantity}</p>
                        <p className='w-full text-left'>{formatCurrency((parseCurrency(items.price) * items.quantity), '£')}</p>
                        <div className='flex items-center gap-x-2'>
                            <button 
                            onClick={()=>increment(items)}
                            className='p-4 text-white shadow-md rounded 
                            bg-gradient-conic from-slate-800 via-slate-500 to-slate-800'>
                                +
                            </button>
                            <button 
                            onClick={()=>decrement(items)}
                            className='p-4 text-white shadow-md rounded
                            bg-gradient-conic from-slate-800 via-slate-500 to-slate-800'>
                                -
                            </button>
                        </div>
                    </div>
                    
                </div>
            )
        })}
        </ul>
        <div className='p-2 container max-w-full flex text-2xl items-center justify-center gap-8 text-black bg-white text-center'>
            Total: <span>{formatCurrency(sum(cartItems),'£')}
            </span>
        </div>
    </div>
  )
}
