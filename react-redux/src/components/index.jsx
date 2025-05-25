import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Container=()=>{
    const location = useLocation();
    const { hash, pathname, search } = location;
    console.log('data---->',pathname);
    const [toggle,setToggle]=useState(false);
    const navigate=useNavigate();

    useEffect(()=>{
        setToggle(pathname=='/app' ? true : false);
    },[pathname]);

    const handleClick=()=>{
    toggle ? navigate('/app/todoapp') : navigate('/app');
    setToggle(!toggle);
    }

  return(
    <div>
        <h1>Main Container</h1>
        <div>
           <button onClick={()=> handleClick()}>Go to {toggle ? 'Todo App' : 'Counter'}</button>
        </div>
        <Outlet />
    </div>
)
}
export default Container;