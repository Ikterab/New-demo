import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Loginpage";
import { Register } from "../Pages/Registerpage";
import {Dashboard} from "../Dashboard/Dashboard";
import Mainlayout from "../Mainlayout/layout";
import Protectedroute from "./ProtectedRoute";
import DashboardRedirect from "../Dashboard/Dashboardredirect";
import Test1 from "../Pages/Test1forrequester";
import Test2 from "../Pages/Test2forrequester";
import Test3 from "../Pages/Test3forrequester";
import Test1Acc from "../Pages/Test1forAccountant";
import Test2Acc from "../Pages/Test2forAccountant";
import Test3Acc from "../Pages/Test3forAccountant";
import Test1Admin from "../Pages/Test1forAdmin";
import Test2Admin from "../Pages/Test2forAdmin";
import Test3Admin from "../Pages/Test3forAdmin";
import CommonDashboard from "../Pages/Commondashboardpage";
// import { categoryType } from "../Dashboard/config";
import { Category } from "../Dashboard/config";
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
                // element:<DashboardRedirect/>
                element: (
                    <Protectedroute roles={[Category.Requester, Category.Accountant, Category.Admin]}>
                        <DashboardRedirect />
                    </Protectedroute>
                )
            },

            {
                path: '/dashboard/requester',
                element: (<Protectedroute roles={[Category.Requester]}>
                    <Dashboard />
                </Protectedroute>) ,
                children: [{
                    index: true,
                    element:<CommonDashboard/>

                },
                    {
                        path: 'test1',
                        element: <Test1/>

                    },
                    {
                        path: 'test2',
                        element:<Test2/>
                    
                    },
                    {
                        path: 'test3',
                        element: <Test3/>

                    }
                
                ]
            },
            {
                path: '/dashboard/admin',
                element: (<Protectedroute roles={[Category.Admin]}>
                    <Dashboard />
                </Protectedroute>),
                children: [{
                    index: true,
                    element: <CommonDashboard />

                },
                    {
                        path: 'test1',
                        element: <Test1Admin />

                    },
                {
                    path: 'test2',
                    element: <Test2Admin />

                },
                {
                    path: 'test3',
                    element: <Test3Admin />

                }

                ]
            },
            {
                path: '/dashboard/accountant',
                element: (
                    <Protectedroute roles={[Category.Accountant]}>
                        <Dashboard />
                    </Protectedroute>),
                children: [{
                    index: true,
                    element: <CommonDashboard/>

                },
                    {
                        path: 'test1',
                        element: <Test1Acc />

                    },
                {
                    path: 'test2',
                    element: <Test2Acc />

                },
                {
                    path: 'test3',
                    element: <Test3Acc/>

                }

                ]
            },
            {
                path: '*',
                element: (
                    <div className="h-screen flex justify-center items-center text-3xl font-bold">
                        404 Not Found
                    </div>
                ),
            }
        
        ],
        
    }
])