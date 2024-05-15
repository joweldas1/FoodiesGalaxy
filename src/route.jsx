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
import UserCreatePost from "./All Pages & Component/Pages/UserCreatePost/UserCreatePost";
import FoodiesTour from "./All Pages & Component/Pages/ShowUserPost/FoodiesTour";
import UserPersonalUploadDataShow from "./All Pages & Component/Pages/UserPersonalUploadDataShow/UserPersonalUploadDataShow";
import UserUploadDataUpdate from "./All Pages & Component/Pages/UserPersonalUploadDataShow/UserUploadDataUpdate";
import ResUpload from "./All Pages & Component/Pages/ResUpload/ResUpload";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
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
                element:<PrivateRoute><ResturantFoodUpload/></PrivateRoute>
            },
            {
                path:"/allOrdered",
                element:<PrivateRoute><AllOrdered/></PrivateRoute>,
            },
            {
                path:"/food-details/:id",
                element:<PrivateRoute><SingleFoodDetails/></PrivateRoute>
            },
            {
                path:"/myOrder",
                element:<PrivateRoute><SingleCustomerOrder/></PrivateRoute>
            },
            {
                path:"/updateQty/:id",
                element:<PrivateRoute><CustomerUpdatePurchaseQty/></PrivateRoute>                
            },
            {
                path:'/user-post',
                element:<PrivateRoute><UserCreatePost/></PrivateRoute>,
            },
            {
                path:"/all-items",
                element:<AllItems/>
            },
            {
                path:'/user-uploaded/:email',
                element:<PrivateRoute><UserPersonalUploadDataShow/></PrivateRoute>
            },
            {
                path:"/foodTours",
                element:<FoodiesTour/>
            },
            {
                path:'/update-user-post/:id',
                element:<PrivateRoute><UserUploadDataUpdate/></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/update-user-post/${params.id}`)
            }
            ,
            {
                path:"/updateResUpload/:id",
                element:<PrivateRoute> <ResUpload/> </PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/food-details/${params.id}`)
                
            }
        ]
    }
])

export default router