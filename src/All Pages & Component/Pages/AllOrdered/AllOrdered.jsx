import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';

const AllOrdered = () => {
    const [allOrder,setAllOrder] = useState([])
    const {user}=UseAuth()
    const userEmail = user?.email

    console.log(allOrder);

    useEffect(()=>{
      getData()
    },[])

    const getData = () =>{
       axios.get(`${import.meta.env.VITE_API_URL}/ordered`)
      .then(data=>setAllOrder(data.data))
      .catch(error=>console.log(error))
    }


  
    const handleCookingAndCancel =async (id,prevStatus,status,email,userEmail) =>{
      if(email===userEmail) {
         toast.error("You have not permission to Any action here",{style:{backgroundColor:"rgba(255,165,0)",border:"red",border:"2px solid red"}})
         return
      }


      console.log(userEmail);
      const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/updateStatus/${id}`,{status})
      console.log(data);
      if(data.modifiedCount>0){
        getData()
        status==="cancel" && toast.success(`Order ${status}`)
        status==="cooking" && toast.success(`Order in ${status}`)
        status==="confirmed" && toast.success(`Cook is ready for serve`)
      }
    }


    console.log(allOrder);



    return (
        <div className='pt-16'>
          <Helmet><title>FoodiesGalaxy | Order Collection </title></Helmet>
          <h1 className='text-center text-2xl font-bold font-lato'>All Ordered Summary</h1>

<div className="overflow-x-auto ">
  <table className="table whitespace-nowrap text-center ">
    {/* head */}
    <thead className='font-lato font-semibold text-lg'>
      <tr className=''>
        <th>SL</th>
        <th>Ordered Date & Time</th>
        <th>Customer Name</th>
        <th>Ordered Item</th>
        <th>Price</th>
        <th>quantity</th>
        <th>Payable Amount</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='text-lg'>
      {/* row 1 */}
      {
        allOrder?.map((p,idx)=>(
            <tr key={idx}>
        <th>{idx + 1}</th>
        <td>{new Date(p.startDate).toLocaleString()}</td>
        <td>{p.displayName}</td>
        <td>{p.foodName}</td>
        <td>{p.prices}</td>
        <td>{p.quantity}</td>
        <td>{p.prices * p.quantity} </td>
        <td>
          <p className={` text-xs p-1 rounded-xl text-center h-7 bg-opacity-80 text-opacity-100
          ${p.status==="confirmed" && 'text-blue-800 font-semibold  bg-blue-200 backdrop-blur-2xl bg-opacity-85 bg-blend-saturation' }
          ${p.status==="cancel" && ' font-semibold text-red-800 bg-red-100' }
          ${p.status==="cooking" && 'text-[rgba(255,165,0)] bg-green-100' }
          ${p.status==="pending" && 'text-purple-700 font-semibold  bg-green-200' }
          `}>

          {p.status}

          </p>
          </td>

        <td className='space-x-10'> 
      
       
        {
         p.status==="pending" && <button onClick={()=>handleCookingAndCancel(p._id,p.status,"cancel",p.email,userEmail)} className='bg-red-500 text-white backdrop-blur-3xl bg-opacity-95 bg-blend-drawer-overlay  p-1 rounded-lg text-sm'>Cancel</button> 
        }
         {
          p.status!=="cancel" && p.status!=="cooking"&& p.status!=="confirmed" ?<button onClick={()=>handleCookingAndCancel(p._id,p.status,"cooking",p.email,userEmail)} className=' bg-green-800 text-white p-1 rounded-lg text-sm  backdrop-blur-2xl'>Cooking</button> :""
        }
        {
          p.status==="cooking"&&<button onClick={()=>handleCookingAndCancel(p._id,p.status,"confirmed",p.email,userEmail)} className='bg-blue-500 text-white p-1 rounded-lg text-sm'>Cooking Finish</button>
        }
        {
          p.status==="confirmed"&& <p className='text-sm ' >Ordered Completed</p>||p.status==="cancel" && <p className='text-sm ' >Ordered Cancel</p>
        }
    </td>
      </tr>
        ))
      }

     

    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllOrdered;


