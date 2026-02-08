import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import {Header} from "./Header";
export const Dashboard = () => {

    const [collapsed,setcollapsed]=useState(false)
    return (<>
        <div className="flex ">
            <Sidebar collapsed={collapsed } />
            <Header collapsed={collapsed } setcollapsed={setcollapsed} />
        </div>
    </>)
}
