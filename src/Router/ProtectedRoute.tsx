import React, { Children } from "react";
import { Navigate } from "react-router-dom";

type protectedRoute = {
    childern:React.ReactNode
    roles:string[]
}
const Protectedroute = ({roles}:protectedRoute) => {
    const user = JSON.parse(localStorage.getItem('userList') || 'null')
    if (!user)
    {
        return <Navigate to='/Loginpage' replace />
        
    }
  
    if (!roles.includes(user.category))
    {
        return <Navigate to='/Dshboard' />
        
    }

}