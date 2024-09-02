'use client'
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  cart: []
};

// Create a slice
const SliceReducer = createSlice({
  name: 'cartReducer', // Name of the slice
  initialState,
  reducers: {
    addtoCart: (state=initialState, action) => {
        const { id, name, price, picture } = action.payload;
        const existingProduct = state.cart.find(item => item.name === name);
      
        if (existingProduct) {
          console.log(`Updating quantity for: ${name}`);
          existingProduct.quantity += 1;
        } else {
          console.log(`Adding new product: ${name}`);
          state.cart.push({ id, name, price, picture, quantity: 1 });
        }
      
          console.log('Updated cart:', state.cart);
      },
      

    removefromCart: (state=initialState, action) => {
        const { id, name, price, picture } = action.payload;
        const existingProduct = state.cart.find(item => item.name === name);
      
        if (existingProduct) {
          console.log(`Updating quantity for: ${name}`);
          if (existingProduct.quantity <=1){
            state.cart = state.cart.filter((items)=>{return items.name !== name})
          }else{
            existingProduct.quantity -= 1;
          }
          
        } else {
          console.log(`Adding new product: ${name}`);
          state.cart.push({ id, name, price, picture, quantity: 1 });
        }
      
          console.log('Updated cart:', state.cart);
      },

    incrementByAmount: (state, action) => {
      state.value += action.payload; // Increment by a specific amount
    },
  },
});

// Export the actions
export const { addtoCart, removefromCart, incrementByAmount } = SliceReducer.actions;

// Export the reducer to be used in the store
export default SliceReducer.reducer;
