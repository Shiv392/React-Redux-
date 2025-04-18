import React from 'react';

//first import increment,decrement and reset function from countrSlice
import { increment,decrement,reset } from '../features/counter/CounterSlice';

import { useSelector,useDispatch } from 'react-redux';

//useSelector hook will help to get the redux store state value 
//useDispatch hook will help to add dispatch action 

const Counter=()=>{
    const cnt=useSelector((state)=> state.counter.value); //here state is store with counter name
    const dispatch=useDispatch();

return (
    <div>
    <h3>Counter : {cnt}</h3>
    <button onClick={()=> dispatch(increment())}>Increment</button> 
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
)
}
export default Counter;