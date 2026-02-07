import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Menu, X } from 'lucide-react'
const Navbar: React.FC = () => {
    const downarrow = ["Our Companies"]
    return (
        <nav className="w-full py-7   flex justify-between mx-auto items-center horizantalPadding ">
            <Link to="/">
                <p className=" flex text-blue-500  py-5 text-[30px] font-semibold">DEMIAN</p>
            </Link> 
            <div className="flex gap-6">
                <div className="flex gap-6 py-5">
                    {["Home", "About Us", "Our Companies", "Contact US"].map((items, index) => (
                        <Link
                            key={index}
                            to={`/${items.toLowerCase()}`}
                            className={`flex itemns-center ${items === "Our Companies" ? 'space-x-2 ' : ''} `}
                        >
                            <span
                            >{items}
                            </span>
                            {downarrow.includes(items) && <MdOutlineKeyboardArrowDown style={{ fontSize: "24px" }} />}
                        </Link>


                    )
                    )}

                </div>
                                <button className='flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6  py-5 font-semibold rounded-md   shadow-md     hover:shadow-lg transition'>
                    <span>ADD LISTING</span>
                    <IoArrowForwardSharp />
                </button>
            </div>
           
        </nav>)
}
export default Navbar