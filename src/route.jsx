import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./All Pages & Component/Pages/MainLayout/MainLayout";
import ErrorPage from "./All Pages & Component/Pages/ErrorPage/ErrorPage";
import Home from "./All Pages & Component/Pages/Home/Home";
import Login from "./All Pages & Component/Pages/Login/Login";
import Register from "./All Pages & Component/Pages/Register/Register";
import PrivateRoute from "./All Pages & Component/Provider/PrivateRoute";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<PrivateRoute><Home/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router