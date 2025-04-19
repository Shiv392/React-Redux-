import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice.js';
import todolistReducer from '../features/todoapp/TodoSlic.js';

export const store=configureStore({
 reducer:{
    counter:counterReducer,
    todolist:todolistReducer
 }
})  