import {
    BellOutlined,
    SearchOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { dashboardConfig } from "./config";
import { Category } from "./config";
import { Dropdown,Modal } from 'antd';
import type{ categoryType } from "./config";
import { useState } from "react";
import type { MenuProps } from "antd";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../utilities/Avatar";
type props = {
    collapsed: boolean
    setcollapsed:(value:boolean)=>void
}
export const Header = ({ collapsed, setcollapsed}:props) => {
    const user = JSON.parse(localStorage.getItem('userList') || "null")   
    const role = user.category as categoryType
    const roleConfig = dashboardConfig[role]
    // const [open,setOpen]=useState(false)
    const navigate = useNavigate()
    
    function handleLogout(){
        console.log("clicked logout");
        Modal.confirm(
            { title:'Confirm logout',
                content: 'Do you want to log out ?',
                icon: (<LogoutOutlined />),
                okText: 'Logout',
                okType: 'danger',
                onOk:(() => {
                    localStorage.removeItem('userList')
                    navigate('/Loginpage')
                 })
                
            }
        )
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label:(<span>profile</span>)
        },
        {
            key: '2',
            label: (<span
                // onClick={() => {
                // localStorage.removeItem('userList');
                // navigate('/Loginpage')
                // }}
                onClick={handleLogout}
            >
                Logout
            </span>)
        }
    ]
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
            <Dropdown
                className=""
                menu={{ items }} trigger={['click']}>
                <div
                    // onClick={() => setOpen(!open)}
                    className={`h-[60px] w-[60px] ${roleConfig.textclass} rounded-[50%] cursor-pointer ${roleConfig.sidebarbg}  `}>
                    <span className="flex justify-center py-3 font-bold text-[23px]">
                        {user.name?.[0]}
                    </span>

                </div>
                {/* <Avatar user={user } roleConfig={roleConfig} /> */}
            </Dropdown>
            
    
    </div>)
}