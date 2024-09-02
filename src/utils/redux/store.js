'use client'
import { configureStore } from '@reduxjs/toolkit';
import SliceReducer from './SliceReducer'; // Import the reducer

// Create the store with the reducer
const store = configureStore({
  reducer: {
    cartReducer: SliceReducer,
  },
});

export default store;
