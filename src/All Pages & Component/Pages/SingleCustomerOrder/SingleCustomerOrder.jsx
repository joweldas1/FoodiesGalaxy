import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import SingleCustomerDataShow from './SingleCustomerDataShow';
import toast from 'react-hot-toast';
import UseAxios from '../../Hooks/UseAxios';

const SingleCustomerOrder = () => {
    const [singleCustomerOrder , SetSingleCustomerOrder] = useState([])
    const {user} = UseAuth()
    const email = user?.email;
    const customerName = user?.displayName;
    const axiosUrl = UseAxios()
    console.log(singleCustomerOrder);

    const filtered = singleCustomerOrder.some(item=>item.status==="pending")
    console.log(filtered);

    useEffect(()=>{
        getData()
    },[email])

    const getData=async()=>{
        // await axios.get(`${import.meta.env.VITE_API_URL}/myOrder/${email}`,{withCredentials:true})
        await axiosUrl.get(`/myOrder/${email}`)
        .then(data=>SetSingleCustomerOrder(data?.data))
        .catch(error=>console.log(error))
    }

    const totalPrice = singleCustomerOrder.reduce((total, order) => {
        return total+(order.prices * order.quantity) 
    }, 0);

    const totalQuantity = singleCustomerOrder.reduce((total,order)=>{
        return total + order.quantity
    },0)

    const clearAllOrder =async () =>{
        await axios.delete(`${import.meta.env.VITE_API_URL}/removeOrder/${email}`)
        .then(res=> {
                if(res.data.deletedCount>0){
                    getData()
                    toast.success("All items removed")
            }
        })
        .catch(err=>console.log(err))
    }


    




    



    return (
        <div className='py-16'>
            <div>
                

                <h1 className=' text-4xl font-lato text-center my-2 font-semibold mt-5'>Purchase History</h1>


                <div className='flex flex-col-reverse lg:flex-row w-full lg:space-x-4 '>
                    

               <div className="overflow-x-auto flex-1">
                    <table className="table bg-opacity-35 text-center bg-red-400">
                        {/* head */}
                        <thead className='text-base'>

                        <tr>
                            <th></th>
                            <th>Ordered Item Name</th>
                            <th>Ordered Time</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Total Payable Amount</th>
                            <th>Changes Mind</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                singleCustomerOrder?.map((data,idx)=>(<SingleCustomerDataShow data={data} idx={idx} key={idx} />))
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                <div className="max-w-full my-2 p-4 border-2  border-[rgba(255,165,0)] overflow-hidden bg-[#081229] sellP rounded-lg h-full ">
                   <div className='  text-[rgba(255,165,0)]   lg:text-center font-slab text-xl'>
                   <h1 className='  text-[rgba(255,165,0)] underline my-2'>Total Payment Amount</h1>
                   <h1>Total Price : <span>{totalPrice} /-</span> </h1>
                   <h1>Total Quantity : <span>{totalQuantity}</span> </h1>
                   <button className='btn btn-sm mt-3'>Payment</button> <br />
                   <button onClick={clearAllOrder} className={`btn btn-sm mt-3`} >Clear Your Cart</button>
                   </div>
                </div>
                </div>

                </div>
            </div>
            
        </div>
    );
};

export default SingleCustomerOrder;