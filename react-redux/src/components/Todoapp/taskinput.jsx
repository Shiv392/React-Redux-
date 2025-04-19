import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/todoapp/TodoSlic';

const TaskInput=()=>{
    const [taskname,setName]=useState('');
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(addTask(taskname));
        setName('')
    }

    return(
        <div>
            <input type='text' value={taskname} onChange={(e)=> setName(e.target.value)} /> 
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}

export default TaskInput;