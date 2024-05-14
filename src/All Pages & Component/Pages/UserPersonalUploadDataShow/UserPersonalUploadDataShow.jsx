import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import UserUploadShowCard from './UserUploadShowCard';
import { Helmet } from 'react-helmet-async';

const UserPersonalUploadDataShow = () => {
    const [data,setData]=useState()
    console.log(data);

    const {user} = UseAuth()
    const email = user?.email

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/user-uploaded/${email}`)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }



    return (
        <div className='bg-[#0d1829] pt-16 pb-10 '>
            <Helmet><title>FoodiesGalaxy | My post</title></Helmet>

            <div className='grid m-2 gap-3 lg:gap-10 lg:grid-cols-3'>
            {
                data?.map((d,idx)=> <UserUploadShowCard key={idx} idx={idx} getData={getData} data={d} /> )
            }
            </div>
         
        </div>
    );
};

export default UserPersonalUploadDataShow;