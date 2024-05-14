import React, { useEffect } from 'react';
import Navbar from '../../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Shared/Footer/Footer';
import useAOS from '../../../../useAOS';

const MainLayout = () => {
    useEffect(()=>{
        useAOS()
    },[])
    
    return (
        <div className='max-w-7xl mx-auto' >
           
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;