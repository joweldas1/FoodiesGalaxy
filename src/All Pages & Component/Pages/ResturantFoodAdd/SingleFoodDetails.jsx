import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';



const SingleFoodDetails = () => {
    const [singleData,setSingleData] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [qty,setQty] = useState(0)
    const navigate = useNavigate()


    const {id } = useParams()
    const {user}= UseAuth()

    const {foodImage,foodName,price} = singleData;
    const prices = parseFloat(price)
    const quantity = parseFloat(qty)

    const email = user?.email;
    const displayName = user?.displayName;
    const photoURL = user?.photoURL

    

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/food-details/${id}`)
        .then(res=> setSingleData(res.data))
        .catch(err=>console.log(err))
    },[id])


    const handlePlaceOrder = async () =>{
        const orderedData = {
            email,
            displayName,
            photoURL,
            foodImage,
            foodName,
            prices,
            quantity,
            startDate
            
        }
       
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/customer-ordered`,orderedData)
        if(data.acknowledged===true){
        toast.success("Order posted done,Please check order section")
        return navigate("/")
        }
    }

    

    return (
        <>
        <Helmet><title>FoodiesGalaxy | Details</title></Helmet>
        <div className="card lg:card-side bg-base-100 shadow-xl pt-16">
    
      <img src={singleData?.foodImage} alt="Album" className='lg:w-1/2'/>
        <div className="p-4 lg:flex flex-col justify-center">
                        <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    timeIntervals={15} 
                    dateFormat="MMMM d, yyyy h:mm aa"
                    />
            <h1 className=' py-2 font-slab font-semibold text-3xl lg:text-4xl'> {singleData?.foodName} </h1>
            <p className='py-2 f font-lato font-medium'>{singleData?.description}</p>    
            <p><span className='text-lg font-bold font-lato'>Country</span> : {singleData?.origin}</p>
            <p><span className='text-lg font-bold font-lato'>Ingredient : </span>{singleData?.ingredients}</p>
            <p className='font-bold'><span className='text-lg font-bold font-lato'>Price : </span>{singleData?.price}/-</p>
            <div className='flex  mb-5'>
            <p className='text-lg font-bold font-lato'>Quantity : </p> <input onChange={e=>setQty(e.target.value)} className=' border hover:border-2 border-blue-800 rounded-md ml-3 w-11 ' name='quantity'  type="number" required />
            </div>
            <button className='btn btn-primary' onClick={handlePlaceOrder} >Place Order</button>
        </div>
      </div>
      </>
    );
};

export default SingleFoodDetails;