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
    const [sellCount,setSellCount] = useState()
    const [qty,setQty] = useState(0)
    const navigate = useNavigate()

    const currentRemain = singleData?.remain;

    if(currentRemain<=0)return toast.error("Please wait when quantity will available soon")
    console.log(currentRemain);

    const {id } = useParams()
    const {user}= UseAuth()

    const {foodImage,foodName,price,category} = singleData;
    const prices = parseFloat(price)
    const quantity = parseFloat(qty)

    const email = user?.email;
    const displayName = user?.displayName;
    const photoURL = user?.photoURL

    

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/food-details/${id}`)
        .then(res=> {const data=res.data; setSingleData(data)})
        .catch(err=>console.log(err))
    },[id])

    
    
    const countOrder=async()=>{
        const prevCount = singleData.totalSell
        const totalCount = prevCount + quantity

        const newRemain=currentRemain-qty;

        



        const res = await axios.patch(`${import.meta.env.VITE_API_URL}/updatePurchase/${id}`,{totalSell:totalCount,
         remain: newRemain 
        })
        console.log('res--',res);
    }



    const handlePlaceOrder = async () =>{
        if(quantity<=0){toast.error("Oppos, Select valid Quantity ",{style:{backgroundColor:"rgba(255,165,0)",border:"red",border:"2px solid red", color:"white"}})
            return}
        if(quantity>20){toast.error("you can not select more than 20 items  ",{style:{backgroundColor:"rgba(255,165,0)",border:"red",border:"2px solid red", color:"white"}})
            return}



        const orderedData = {
            email,
            displayName,
            photoURL,
            foodImage,
            foodName,
            prices,
            quantity,
            startDate,
            category,
            status :'pending',  
            
        }
        console.log(quantity);
       
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/customer-ordered`,orderedData)
        if(data.acknowledged===true){
        toast.success("Order posted done,Please check order section")
        countOrder()
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
                
            <p className='font-bold'><span className='text-lg font-bold font-lato'>Total sell : </span >  {singleData? singleData?.totalSell : 0}   Pcs</p>
            <p className='font-bold'><span className='text-lg font-bold font-lato'>Price : </span >{singleData?.price}/-</p>
            <p className='font-bold'><span className='text-lg font-bold font-lato'>Remain Qty : </span >{singleData?.remain} pcs</p>
            <div className='flex  mb-5'>
            <p className='text-lg font-bold font-lato'>Quantity : </p> <input onChange={e=>setQty(e.target.value)} className=' border text-center font-semibold hover:border-2 border-blue-800 rounded-md ml-3 w-11 ' name='quantity'  type="number" required />
            </div>
            <button className='btn bg-[rgba(255,165,0)] border hover:bg-[black] hover:border-4 hover:border-[rgba(255,165,0)] border-black text-blue-800 text-xl ' 
            onClick={handlePlaceOrder} >Place Order</button>
        </div>  
      </div>
      </>
    );
};

export default SingleFoodDetails;