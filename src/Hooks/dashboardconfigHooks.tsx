import React from "react";
import { Category, dashboardConfig, type categoryType } from "../Dashboard/config";
import { Dashboard } from './../Dashboard/Dashboard';


export const DashboardConfigHook = () => {
    const user = JSON.parse(localStorage.getItem('userList') || 'null')
    console.log(user)
    const role = user?.category as categoryType;
    //    const roleConfig=dashboardConfig[role] || dashboardConfig[Category.Requester]

    const { sidebarbg, rootpath, textclass, menu }=dashboardConfig[role] || dashboardConfig[Category.Requester];
    return {
        user,sidebarbg,rootpath,textclass,menu, role
    }
}