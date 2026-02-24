import React from "react";
import { Navigate } from "react-router-dom";

type protectedRoute = {
    children: React.ReactNode;
    roles:string[]
}
const Protectedroute = ({children, roles}:protectedRoute) => {
    const user = JSON.parse(localStorage.getItem('userList') || 'null')
    // if (!user)
    // {
    //     return <Navigate to='/Loginpage' replace />
        
    // }
  
    if (!user || !roles.includes(user.category))
    {
        return <Navigate to='/Loginpage' replace/>
         
    }
    return children;
}
export default Protectedroute