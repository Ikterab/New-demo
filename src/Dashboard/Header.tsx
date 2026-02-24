import {
    BellOutlined,
    SearchOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

type props = {
    collapsed: boolean
    setcollapsed:(value:boolean)=>void
}
export const Header = ({ collapsed, setcollapsed}:props) => {
    const user = JSON.parse(localStorage.getItem('userList') || "null")   
    
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
            <div className="h-[60px] w-[60px] bg-black rounded-[50%]">
                
      </div>
    
    </div>)
}