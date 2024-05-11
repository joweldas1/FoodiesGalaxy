import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./All Pages & Component/Pages/MainLayout/MainLayout";
import ErrorPage from "./All Pages & Component/Pages/ErrorPage/ErrorPage";
import Home from "./All Pages & Component/Pages/Home/Home";
import Login from "./All Pages & Component/Pages/Login/Login";
import Register from "./All Pages & Component/Pages/Register/Register";
import PrivateRoute from "./All Pages & Component/Provider/PrivateRoute";
import ResturantFoodUpload from "./All Pages & Component/Pages/ResturantFoodAdd/ResturantFoodUpload";
import SingleFoodDetails from "./All Pages & Component/Pages/ResturantFoodAdd/SingleFoodDetails";
import AllOrdered from "./All Pages & Component/Pages/AllOrdered/AllOrdered";
import SingleCustomerOrder from "./All Pages & Component/Pages/SingleCustomerOrder/SingleCustomerOrder";
import CustomerUpdatePurchaseQty from "./All Pages & Component/Pages/CustomerUpdatePurchaseQty/CustomerUpdatePurchaseQty";
import AllItems from "./All Pages & Component/Pages/AllItems/AllItems";

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
            },
            {
                path:"/ourService",
                element:<ResturantFoodUpload/>
            },
            {
                path:"/allOrdered",
                element:<AllOrdered/>,
            },
            {
                path:"/food-details/:id",
                element:<SingleFoodDetails/>
            },
            {
                path:"/myOrder",
                element:<SingleCustomerOrder/>
            },
            {
                path:"/updateQty/:id",
                element:<CustomerUpdatePurchaseQty/>                
            },
            {
                path:"/all-items",
                element:<AllItems/>
            },
            {
                path:"/foodTours",
                element:''
            }
        ]
    }
])

export default router