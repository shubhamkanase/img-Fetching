import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../features/dogSlice';

const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});

export default store;
