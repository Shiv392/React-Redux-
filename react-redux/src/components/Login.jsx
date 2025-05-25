import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
 const [email,setEmail]=useState('');
 const [password,setPassword] = useState('');
 const navigate = useNavigate();

 const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/app');
 }

 return(
    <div>
        <form  className="form-container" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
 )
}
export default Login;