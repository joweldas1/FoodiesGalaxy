import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllOrdered = () => {
    const [allOrder,setAllOrder] = useState("")

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/ordered`)
        .then(data=>setAllOrder(data.data))
        .catch(error=>console.log(error))
    },[])

    console.log(allOrder);



    return (
        <div className='pt-16'>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=''>
        <th></th>
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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
        <td className='space-x-10'> 
        <button className='bg-red-500 text-white p-1 rounded-lg'>Cancel</button> 
        <button>Confirmed</button>  </td>
      </tr>


    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllOrdered;