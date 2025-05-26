import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value: JSON.parse(sessionStorage.getItem('todolist')) || ['Go to Gym','Complete Design Pattern','Complete BackTracking']
}

const StoreTodolist=(todolist)=>{
    sessionStorage.setItem('todolist',JSON.stringify(todolist));
}

const TodoSlice=createSlice({
     name:'todolist',
     initialState,
     reducers:{
        addTask:(state,action)=>{
           console.log('action-------->',action);
           state.value.push(action.payload);
           StoreTodolist(state.value)
        },
        deleteTask:(state,action)=>{
            console.log('action-------->',action);
            state.value=state.value.filter((data,index)=> index!=action.payload);
            StoreTodolist(state.value);
        }
     }
})

export const {addTask,deleteTask} = TodoSlice.actions;
export default TodoSlice.reducer
