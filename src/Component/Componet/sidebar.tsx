import  {useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {  X } from 'lucide-react'
import { set } from "zod";
type props = {
    sidebarOpen: boolean,
    setSidebarOpen:(value:boolean)=>void
}
function Sidebar({ sidebarOpen, setSidebarOpen}:props) {
const downarrow=["Our Companies"]    
return (
        <>
            <div
                className={`lg:hidden h-full left-0 w-[300px] top-0 fixed bg-white shadow-sm z-40 ${sidebarOpen? "translate-x-0" :"-translate-x-full"} transition duration-500`}
        >
            <div className="flex px-6 flex-col">
                <div className="flex justify-between">
                    <Link to="/">
                        <p className=" flex text-blue-500  py-5 text-[30px] font-semibold">DEMIAN</p>
                    </Link> 
                    <button onClick={()=>setSidebarOpen(!sidebarOpen)}><X/></button>
               </div>
                {/* <div>
                    {["Home", "About Us", "Our Companies", "Contact US"].map(() => {
                        
                    })

                    }
                </div> */}
            </div>
                              
        </div>
        </>
    )
}
export default Sidebar