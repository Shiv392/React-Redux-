import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:['Go to Gym','Complete Design Pattern','Complete BackTracking']
}

const TodoSlice=createSlice({
     name:'todolist',
     initialState,
     reducers:{
        addTask:(state,action)=>{
           console.log('action-------->',action);
           state.value.push(action.payload)
        },
        deleteTask:(state,action)=>{
            console.log('action-------->',action);
            state.value=state.value.filter((data,index)=> index!=action.payload);
        }
     }
})

export const {addTask,deleteTask} = TodoSlice.actions;
export default TodoSlice.reducer
