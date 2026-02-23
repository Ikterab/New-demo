import React from "react";
import { dashboardConfig, type categoryType } from "./config";
import { Navigate } from "react-router-dom";
const DashboardRedirect = () => {
    const user = JSON.parse(localStorage.getItem('userList') || 'null')
    const role = user?.category as categoryType | undefined
    if (!role || !dashboardConfig[role]) return <Navigate to='/Loginpage' />
    return <Navigate to={ dashboardConfig[role].menu[0].path} />
    
}
export default DashboardRedirect