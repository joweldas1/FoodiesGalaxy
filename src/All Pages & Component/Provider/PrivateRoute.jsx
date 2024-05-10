import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = UseAuth()
    
    const location = useLocation()

    if(loading)
    return 
    <> 
    <div> <span className="loading loading-spinner text-warning"></span>
    </div>  
    </> 

    if(!user) return <Navigate to='/login' state={location.pathname} ></Navigate>

    return children


};

export default PrivateRoute;
