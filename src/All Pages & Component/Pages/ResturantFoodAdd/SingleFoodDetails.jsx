import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleFoodDetails = () => {
    const [singleData,setSingleData] = useState()
    const {id } = useParams()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/food-details/${id}`)
        .then(res=> setSingleData(res.data))
        .catch(err=>console.log(err))
    },[id])

    

    console.log(singleData);
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl pt-16">
      <img src={singleData?.foodImage} alt="Album"/>
        <div className="card-body">
            <h1> {singleData?.foodName} </h1>
            <p>{singleData?.description}</p>
            <p>Country : {singleData?.origin}</p>
            <p>Ingredient : {singleData?.origin}</p>
        </div>
      </div>
    );
};

export default SingleFoodDetails;