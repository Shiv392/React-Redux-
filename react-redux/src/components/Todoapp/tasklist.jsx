import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../features/todoapp/TodoSlic';

const TaskList=()=>{
    const tasklist=useSelector((state)=> state.todolist.value);
    const dispatch=useDispatch();

    const handleDelete=(index)=>{
       dispatch(deleteTask(index));
    }

    console.log('todlist----->',tasklist)
    return(
        <div>
            <h3>Task list </h3>
            {
                tasklist.length==0 ? <p>No Task</p> : 
                <div>
               <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasklist.map((task,index)=>(
                            <tr key={index}>
                            <td>{index+1}</td>
                            <td>{task}</td>
                            <td>
                                <button onClick={()=> handleDelete(index)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
               </table>
            </div>
            }
        </div>
    )
}
export default TaskList;