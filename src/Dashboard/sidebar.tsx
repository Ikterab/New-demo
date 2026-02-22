import React from "react";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";
import  { dashboardConfig, Category } from "./config";
import type { categoryType } from "./config";
type props = {
    collapsed:boolean
}

export const Sidebar = ({ collapsed }: props) => {
    const forarrow=["About Us","Our Companies"]
    const user= JSON.parse(localStorage.getItem("userList") || "null")
       const role=user?.category as categoryType
       const roleConfig=dashboardConfig[role] || dashboardConfig[Category.Requester]
    return (<>
        <div className={`w-[300px] h-full top-0 py-10 ${roleConfig.sidebarbg} ${roleConfig.textclass} fixed ${collapsed ?"left-[-300px]":"left-0"} duration-300 transition-all`}  >
              <h1 className="px-10 text-[30px] text-white font-semibold ">Demian </h1>
            <div>
                {
                    ["Profile", "About Us", "Our Companies", "Contact US"].map((items, index) => (
                        <Link
                            key={index}
                            to={`/${items.toLowerCase()}`}
                            className={`flex  px-10 py-1 ${forarrow.includes(items)? ' space-x-2 ' :''}`}
                        >
                            <span className="font-semibold ">{items}</span>
                            {forarrow.includes(items) && <MdOutlineKeyboardArrowDown style={{ fontSize:"24px"}}/>}
                        </Link>
                    ))
                }
            </div>
    </div>
    
    
    </>)


}