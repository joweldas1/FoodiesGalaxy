import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';


const UseAuth = () => {
    const all = useContext(authContext)
    return all
};

export default UseAuth;