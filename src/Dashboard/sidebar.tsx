import React from "react";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";

type props = {
    collapsed:boolean
}
export const Sidebar = ({ collapsed}:props) => {
    const forarrow=["About Us","Our Companies"]
    return (<>
        <div className={`w-[300px] h-full top-0  bg-blue-400 fixed ${collapsed ?"left-[-300px]":"left-0"} duration-300 transition-all`}  >
              <h1 className="px-10 text-[30px] text-white font-semibold ">Demian </h1>
            <div>
                {
                    ["Home", "About Us", "Our Companies", "Contact US"].map((items, index) => (
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