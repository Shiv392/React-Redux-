import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice.js';

export const store=configureStore({
 reducer:{
    counter:counterReducer
 }
})  