import { createSlice } from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
  value: 0,
};

// Create a slice
const SliceReducer = createSlice({
  name: 'productReducer', // Name of the slice
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the value
    },
    decrement: (state) => {
      state.value -= 1; // Decrement the value
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Increment by a specific amount
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to be used in the store
export default SliceReducer.reducer;
