import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';

const AllOrdered = () => {
    const [allOrder,setAllOrder] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/ordered`)
        .then(data=>setAllOrder(data.data))
        .catch(error=>console.log(error))
    },[])

    console.log(allOrder);



    return (
        <div className='pt-16'>

<div className="overflow-x-auto ">
  <table className="table whitespace-nowrap text-center ">
    {/* head */}
    <thead className='font-lato font-semibold text-sm'>
      <tr className=''>
        <th>SL</th>
        <th>Ordered Date & Time</th>
        <th>Customer Name</th>
        <th>Ordered Item</th>
        <th>Price</th>
        <th>quantity</th>
        <th>Payable Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allOrder?.map((p,idx)=>(
            <tr key={idx}>
        <th>1</th>
        <td>{new Date(p.startDate).toLocaleString()}</td>
        <td>{p.displayName}</td>
        <td>{p.foodName}</td>
        <td>{p.prices}</td>
        <td>{p.quantity}</td>
        <td>{p.prices * p.quantity} </td>
        <td className='space-x-10'> 
        <button className='bg-red-500 text-white p-1 rounded-lg'>Cancel</button> 
        <button className='bg-lime-500 text-white p-1 rounded-lg'>Cooking</button> 
        <button className='bg-blue-500 text-white p-1 rounded-lg'>Confirmed</button>  </td>
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