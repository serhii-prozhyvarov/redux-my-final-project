import { configureStore } from '@reduxjs/toolkit';
import cars from './carsSlice'
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
        cars: cars,
      cart:cart,
  },
});
