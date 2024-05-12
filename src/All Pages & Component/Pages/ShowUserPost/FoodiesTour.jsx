import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FoodiesTour = () => {
    const [postData,setPostData] = useState()
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/posted-data`)
        .then(res=>setPostData(res.data))
        .catch(err=>console.log("error-->",err))
    },[])

    console.log('data receive but UI pending---->',postData);


    return (
        <div>
            
        </div>
    );
};

export default FoodiesTour;