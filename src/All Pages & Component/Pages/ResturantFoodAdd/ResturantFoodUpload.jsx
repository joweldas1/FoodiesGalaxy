import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';



const ResturantFoodUpload = () => {
    const [selectCategory,setSelectCategory] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = async(data) => {
        const submit = {...data,category:selectCategory}
        console.log(submit)
        await axios.post(`${import.meta.env.VITE_API_URL}/todays-meal`,submit)
        .then(res=>{
        if(res.status===200){
                toast.success("Post done")
        }})
        .catch(error=>console.log(error))
     
    }
    









    
    console.log(selectCategory);
    return (
        <div className='pt-16'>
            <Helmet><title>FoodiesGalaxy | Restaurant items upload form</title></Helmet>
        <div className="w-full p-3 lg:max-w-4xl mx-auto  rounded-lg shadow-md bg-[rgba(255,160,0)] ">
        <h2 className="p-1 text-center text-2xl font-semibold text-gray-700 capitalize dark:text-white">Uploads Today's Items</h2>
    
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-gray-700  dark:text-gray-200" >Food Name</label>
                    <input {...register("foodName")} id="foodName" name='foodName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/> 
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Image</label>
                    <input {...register("foodImage")} id="foodImage" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Category</label>
                    <select onChange={e=>setSelectCategory(e.target.value)} value={selectCategory} name='cookCategory' id='cookCategory' className='border w-full p-2 mt-2 text-gray-700 bg-white  border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring 'required>
                        <option value=''> </option>
                        <option value='breakfast'>Break Fast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='dinner'>Dinner</option>
            </select>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Price </label>
                    <input {...register("price")} id="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>


                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Made By</label>
                    <input {...register("madeBy")} id="madeBy" type="text" name='madeBy' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Food Origin</label>
                    <input {...register("origin")} id="origin" type="text" name='origin' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"required />
                </div>
                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Ingredients</label>
                    <input {...register("ingredients")} id="origin" type="text" name='ingredients' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
                </div>

                <div>
                    <label className="text-gray-700 dark:text-gray-200" >Description</label>
                    <input {...register("description")} id="description" name='description' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"required />
                </div>





            </div>
    
            <div className="flex justify-center mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform  border-2 border-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
        </div>
        </div>
  
    );
};

export default ResturantFoodUpload;







