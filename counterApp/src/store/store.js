import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counterSlice.js';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
