// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Thunk to fetch the dog image
// export const fetchDogImage = createAsyncThunk('dog/fetchDogImage', async () => {
//   const response = await fetch('https://dog.ceo/api/breeds/image/random');
//   const data = await response.json();
//   return data.message; // This returns the image URL
// });

// const dogSlice = createSlice({
//   name: 'dog',
//   initialState: {
//     imageUrl: '',
//     cart: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchDogImage.fulfilled, (state, action) => {
//       state.imageUrl = action.payload;
//     });
//   },
// });

// export const { addToCart } = dogSlice.actions;
// export default dogSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Thunk to fetch the dog image
export const fetchDogImage = createAsyncThunk('dog/fetchDogImage', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message; // This returns the image URL
});

// Initial state
const initialState = {
  imageUrl: '',
  history: [],
  cart: [],
};

// Redux slice for dog images
const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    setDog: (state, action) => {
      state.imageUrl = action.payload;
      state.history.push(action.payload); // Store image URL in history
    },
    addToCart: (state, action) => {
      const { imageUrl, price } = action.payload;
      state.cart.push({ imageUrl, price }); // Add image URL and price to the cart
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDogImage.fulfilled, (state, action) => {
      state.imageUrl = action.payload;
      state.history.push(action.payload); // Store image URL in history
    });
  },
});

// Memoized selector for the history array
export const selectDogHistory = createSelector(
  (state) => state.dog.history,
  (history) => history || []
);

// Memoized selector for the cart
export const selectCart = createSelector(
  (state) => state.dog.cart,
  (cart) => cart || []
);

// Export actions generated from the slice
export const { setDog, addToCart } = dogSlice.actions;

// Export the reducer for the store
export default dogSlice.reducer;
