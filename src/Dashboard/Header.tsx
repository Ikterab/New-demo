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
    
    
    return (<>
        <div className="sticky">
            <button
                onClick={() => setcollapsed(!collapsed)}
            >
                {collapsed ? <HiOutlineMenuAlt2 size={25} /> : <HiOutlineMenuAlt3 size={ 25} />  }
            </button>
            
        </div>
    
    
    </>)
}