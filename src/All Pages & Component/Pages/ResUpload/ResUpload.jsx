import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import toast from 'react-hot-toast';


const ResUpload = () => {
    const loader = useLoaderData()
    const{_id} = loader
    const {user}=UseAuth()
    const userEmail = user?.email
    const [selectCategory,setSelectCategory]=useState('')
    const navigate =useNavigate()

console.log(selectCategory);
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    //   const updatedTime = startDate.toLocaleString()

    
    const {
        category,
        description,
        foodImage,
        foodName,
        ingredients,
        madeBy,
        origin,
        price,
        totalSell,remainingQty
        } =loader

    const onSubmit=async(data)=>{
        if(userEmail!=="joweld35@gmail.com"){
            return toast.error("You have not access to update")
        }


        const all ={...data,category:selectCategory}
            const {category,foodImage,foodName,ingredients,madeBy,origin,prices,remainingQty} = all
            const price = parseFloat(prices)
            const remain = parseFloat(remainingQty)
            const submit ={category,foodImage,foodName,ingredients,madeBy,origin,price,remain,userEmail}

            const res =await axios.put(`${import.meta.env.VITE_API_URL}/resUpdate/${_id}`,submit)
            if(res.data.modifiedCount>0){
                toast.success("Updated Successfully",{style:{backgroundColor:"green",color:"white",border:"2px solid rgba(255,165,0)"}})
                return navigate('/all-items')
            }

        
    }




    return (
        

        <div className=' w-full  lg:w-1/2 mx-auto pt-16'>
            <div className='bg-blue-600 mx-2 my-16 px-2 lg:px-4 pt-2 rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)}>        
            <div className="grid  gap-6 mt-4 grid-cols-2">
                <div>
                    <label className="text-gray-700  dark:text-gray-200" >Food Name</label>
                    <input {...register("foodName")} defaultValue={foodName} id="foodName" name='foodName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/> 
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Image</label>
                    <input {...register("foodImage")} defaultValue={foodImage} id="foodImage" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Category</label>
                    <select onChange={e=>setSelectCategory(e.target.value)} name='cookCategory' id='cookCategory' className='border w-full p-2 mt-2 text-gray-700 bg-white  border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring 'required>
                        <option value=''> </option>
                        <option value='breakfast'>Break Fast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='dinner'>Dinner</option>
            </select>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Price </label>
                    <input {...register("prices")} defaultValue={price} id="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>


                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Made By</label>
                    <input {...register("madeBy")} id="madeBy" defaultValue={madeBy} type="text" name='madeBy' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Origin</label>
                    <input {...register("origin")} id="origin" defaultValue={origin} type="text" name='origin' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"required />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Ingredients</label>
                    <input {...register("ingredients")} id="origin" defaultValue={ingredients} type="text" name='ingredients' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

                  
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >remainingQty </label>
                    <input {...register("remainingQty")} defaultValue={remainingQty} id="remainingQty" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>





            </div>
    
            <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform  border-2 border-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
            </div>
        </form>
            </div>
        </div>
        
    );
};

export default ResUpload;