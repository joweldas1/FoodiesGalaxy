import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllOrdered = () => {
    const [allOrder,setAllOrder] = useState([])

    useEffect(()=>{
      getData()
    },[])

    const getData = () =>{
      axios.get(`${import.meta.env.VITE_API_URL}/ordered`)
      .then(data=>setAllOrder(data.data))
      .catch(error=>console.log(error))
    }


  
    const handleCookingAndCancel =async (id,prevStatus,status) =>{
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
          ${p.status==="confirmed" && 'text-white bg-blue-800' }
          ${p.status==="cancel" && 'text-white bg-red-600' }
          ${p.status==="cooking" && 'text-white bg-green-600' }
          `}>
          {p.status}
          </p>
          </td>

        <td className='space-x-10'> 
      
       
        {
         p.status==="pending" && <button onClick={()=>handleCookingAndCancel(p._id,p.status,"cancel")} className='bg-red-500 text-white p-1 rounded-lg text-sm'>Cancel</button> 
        }
         {
          p.status!=="cancel" && p.status!=="cooking"&& p.status!=="confirmed" ?<button onClick={()=>handleCookingAndCancel(p._id,p.status,"cooking")} className='bg-lime-500 text-white p-1 rounded-lg text-sm'>Cooking</button> :""
        }
        {
          p.status==="cooking"&&<button onClick={()=>handleCookingAndCancel(p._id,p.status,"confirmed")} className='bg-blue-500 text-white p-1 rounded-lg text-sm'>Cooking Finish</button>
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


