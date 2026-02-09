import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export const Dashboard = () => {

    const [collapsed,setcollapsed]=useState(false)
    return (<>
        <div className="">
            <Sidebar collapsed={collapsed } />
            <main className={`transition-all duration-300 ${collapsed? "ml-0" : "ml-[300px]"}`}>
                <Header collapsed={collapsed} setcollapsed={setcollapsed} />
                <div>
                <Outlet/>
                </div> 
            </main>
        </div>
    </>)
}
