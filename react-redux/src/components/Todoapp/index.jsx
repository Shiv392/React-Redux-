import React from 'react';
import TaskInput from './taskinput';
import TaskList from './tasklist';

const TodoContainer=()=>{
return(
    <div>
        <TaskInput />
        <div>
            <TaskList />
        </div>
    </div>
)
}
export default TodoContainer;