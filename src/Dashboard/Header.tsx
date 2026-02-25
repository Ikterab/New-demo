import {
    BellOutlined,
    SearchOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { dashboardConfig } from "./config";
import { Category } from "./config";
import type{ categoryType } from "./config";
import { useNavigate } from "react-router-dom";

type props = {
    collapsed: boolean
    setcollapsed:(value:boolean)=>void
}
export const Header = ({ collapsed, setcollapsed}:props) => {
    const user = JSON.parse(localStorage.getItem('userList') || "null")   
    const role = user.category as categoryType
    const roleConfig=dashboardConfig[role]
    
    return (
        <div className="flex justify-between py-10 px-6 bg-white shadow-md w-full " >
        <div className=" flex flex-start gap-4 sticky">
            <button
                onClick={() => setcollapsed(!collapsed)}
            >
                {collapsed ? <HiOutlineMenuAlt2 size={25} /> : <HiOutlineMenuAlt3 size={ 25} />  }
            </button>
        <input className=" border-[1px] h-[40px] rounded-md border-gray-300"/>
        </div>
            <div className={`h-[60px] w-[60px] ${roleConfig.textclass} rounded-[50%] cursor-pointer ${roleConfig.sidebarbg}  `}>
                <span className="flex justify-center py-3 font-bold text-[23px]">
                    {user.name[0]}
                </span>
      </div>
    
    </div>)
}