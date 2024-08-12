
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


export const fetchDogImage = createAsyncThunk('dog/fetchDogImage', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data.message; 
});


const initialState = {
  imageUrl: '',
  history: [],
  cart: [],
};


const dogSlice = createSlice({
  name: 'dog',
  initialState,
  reducers: {
    setDog: (state, action) => {
      state.imageUrl = action.payload;
      state.history.push(action.payload); 
    },
    addToCart: (state, action) => {
      const { imageUrl, price } = action.payload;
      state.cart.push({ imageUrl, price }); 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDogImage.fulfilled, (state, action) => {
      state.imageUrl = action.payload;
      state.history.push(action.payload); 
    });
  },
});


export const selectDogHistory = createSelector(
  (state) => state.dog.history,
  (history) => history || []
);


export const selectCart = createSelector(
  (state) => state.dog.cart,
  (cart) => cart || []
);


export const { setDog, addToCart } = dogSlice.actions;

export default dogSlice.reducer;
