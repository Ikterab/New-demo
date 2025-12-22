import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoArrowForwardSharp } from "react-icons/io5";

const Navbar: React.FC=() => {
    
    return (
        <nav className="w-full py-5   flex justify-between mx-auto items-center horizantalPadding ">
        <p>DEMIAN</p>
        <div>
                {["Home", "About Us", "Our Companies", "Contact US"].map((items, index) => (
                    
                    <span
                        key={index}
                    >{items}
                    </span>))}  
       </div>
       
    </nav>)
}
export default  Navbar