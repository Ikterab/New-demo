import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Loginpage";
import { Register } from "../Pages/Registerpage";
import {Dashboard} from "../Dashboard/Dashboard";
import Mainlayout from "../Mainlayout/layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [{
            // path: '/Registerpage',
            path:"/",
            element:<Register/>,
        },
            {
                path: '/Loginpage',
                element:<Login/>,
            },
            {
                path: '/Dashboard',
                element:<Dashboard/>,
            }
        
        ],
        
    }
])