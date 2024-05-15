import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = UseAuth()
    
    const location = useLocation()
    
    if(loading)
    return <div className='w-full h-full mx-auto text-center'><span className="loading loading-spinner loading-xs"></span></div>
     

    if(!user) return <Navigate to='/login' state={location.pathname} ></Navigate>

    return children


};

export default PrivateRoute;
