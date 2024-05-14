import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodiesData from './FoodiesData';
import { Helmet } from 'react-helmet-async';

const FoodiesTour = () => {
    const [postData,setPostData] = useState([])
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/posted-data`)
        .then(res=>setPostData(res.data))
        .catch(err=>console.log("error-->",err))
    },[])

    console.log('data receive but UI pending---->',postData);


    return (
        <div>
            <Helmet><title>FoodiesGalaxy | All Post</title></Helmet>
            <div className='lg:grid grid-cols-2 mx-1 lg:gap-2 mb-5'>

            {postData.map((data,idx)=>  <FoodiesData data={data} key={idx}/>  )}
            </div>

        </div>
    );
};

export default FoodiesTour;