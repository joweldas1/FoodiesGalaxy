import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const CustomerUpdatePurchaseQty = () => {
    const [singleData,setSingleData] = useState()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/updateQty/${id}`)
        .then(res=>setSingleData(res?.data))
        .catch(err=>console.log(err))
    },[])


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const quantityProduct = e.target.quantity.value
        const quantity = parseFloat(quantityProduct) 
        console.log(quantity);

        try {
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/updatedQuantity/${id}`,{ quantity: quantity })
            if(data.modifiedCount > 0){
              toast.success("update Done")
            }
        } catch (error) {
            console.log(error);
        }
    }






    return (
        <div className=' pt-16'>

     <div className=''>
     <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-1 w-1/2 mx-auto bg-blue-500 bg-opacity-45 p-4 shadow-2xl sm:grid-cols-2 rounded-lg">
                <div>
                <label htmlFor="">Food Name</label>
                    <input  id="foodName" name='foodName'defaultValue={singleData?.foodName} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> 
                </div>
                <div>
                <label htmlFor="">Category</label>
                    <input  id="foodName" name='foodName'defaultValue={singleData?.category} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" /> 
                </div>
    
                
    
                <div>
                <label htmlFor="">Quantity</label>
                    <input type='number'  name='quantity' defaultValue={`${singleData?.quantity}`}  id='cookCategory' className='border w-full p-2 mt-2 text-blue-700 bg-white  border-gray-200 rounded-md dark:bg-gray-800 dark:text-blue-600 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring '>
                       
            </input>
                </div>
    
                <div>
                    <label htmlFor="price">Price</label>
                    <input  id="price" defaultValue={singleData?.prices} disabled type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>


             

               
               
               





            </div>
    
            <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
     </div>
            
        </div>
    );
};

export default CustomerUpdatePurchaseQty;