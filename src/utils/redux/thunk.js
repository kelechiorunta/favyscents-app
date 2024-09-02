import { createAsyncThunk } from "@reduxjs/toolkit";
export const updateCart = createAsyncThunk(
    'cart/updateCart',
    async (product, { getState, dispatch }) => {
        const { id, name, price, picture } = product
      console.log('Product to add:', product);
      const state = getState();
      console.log('Current state:', state.cartReducer);
  
      const existingProduct = state.cartReducer.cart.find(item => item.name === name);
      
      let updatedCart;
      if (existingProduct) {
        // If the product exists, update its quantity
        updatedCart = state.cartReducer.cart.map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product doesn't exist, add it to the cart
        updatedCart = [...state.cartReducer.cart, { id, name, price, picture, quantity: 1 }];
      }
      
    //   state.cartReducer.cart = updatedCart
      console.log('Updated cart:', updatedCart);
      console.log(state.cartReducer.cart)
      
      dispatch(addtoCart(updatedCart));
      return updatedCart;
    }
  );
  
