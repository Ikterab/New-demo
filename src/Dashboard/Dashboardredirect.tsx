import React from "react";
import { dashboardConfig } from "./config";
import { Navigate } from "react-router-dom";
const DashboardRedirect = () => {
    const user = JSON.parse(localStorage.getItem('userList') || 'null')
    const role = user?.category
    if (!role) return <Navigate to='/Loginpage' />
    return <Navigate to={ dashboardConfig[role].menu[0]} />
    
}
export default DashboardRedirect