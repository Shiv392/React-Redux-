import { createSlice } from "@reduxjs/toolkit";

const initialState={  //initial value of the state ------------->
    value : 0
}

const counterSlice=createSlice({
    name:'counter', //this name will be used to access this state 
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;