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
    
    
    return (
        <div className="py-10 px-6 bg-white shadow-md w-full " >
        <div className=" flex flex-start gap-4 sticky">
            <button
                onClick={() => setcollapsed(!collapsed)}
            >
                {collapsed ? <HiOutlineMenuAlt2 size={25} /> : <HiOutlineMenuAlt3 size={ 25} />  }
            </button>
        <input className=" border-[1px] border-gray-300"/>
        </div>
    
    
    </div>)
}