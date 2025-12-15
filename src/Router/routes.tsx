import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Loginpage";
import { Register } from "../Pages/Registerpage";
import Mainlayout from "../Mainlayout/layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [{
            path: '/Registerpage',
            element:<Register/>,
        },
            {
                path: '/Loginpage',
                element:<Login/>,
        }
        
        ],
        
    }
])