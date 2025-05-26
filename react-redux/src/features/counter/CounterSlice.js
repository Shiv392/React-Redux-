import { createSlice } from "@reduxjs/toolkit";

const initialState={  //initial value of the state ------------->
    value : Number(sessionStorage.getItem('count')) || 0
}

const StoreCounter=(count)=>{
   sessionStorage.setItem('count',String(count));
}

const counterSlice=createSlice({
    name:'counter', //this name will be used to access this state 
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
            StoreCounter(state.value)
        },
        decrement:(state)=>{
            state.value-=1;
            StoreCounter(state.value);
        },
        reset:(state)=>{
            state.value=0;
            StoreCounter(0);
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;