import { Navigate } from "react-router-dom";

const AuthGuard = ({children})=>{
 const token = localStorage.getItem('token');

 if(!token || token==undefined){
  return  <Navigate to='/' replace />
 }
 else return children;
}
export default AuthGuard;