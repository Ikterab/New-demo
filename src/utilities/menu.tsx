import { Dropdown } from "antd";

import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

const items: MenuProps['items'] = [
    {
        key: '1',
        label:(<span>profile</span>)
    },
    {
        key: '2',
        label: (<span onClick={() => {
            localStorage.removeItem('userList');
            navigate('/Loginpage')
        }}>
            Logout
        </span>)
    }
]