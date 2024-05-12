import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';
import UseAuth from '../../Hooks/UseAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const UserUploadDataUpdate = () => {
    const loader = useLoaderData()
    const [startDate, setStartDate] = useState  (new Date());
    const navigate = useNavigate()

    const allData = loader?.uploadData;
    const{country,description,imgURL,ingredients,itemName,review} = allData
    const {_id} = loader

    const {user} = UseAuth()
    const email = user?.email;
    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const updatedTime = startDate.toLocaleString()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      
    
      const onSubmit = async(data) => {
        const uploadData = {...data,updatedTime}

        await axios.put(`${import.meta.env.VITE_API_URL}/update-user-post/${_id}`,uploadData)
        .then(res=>{
            if(res.data.acknowledged){
                toast.success("Your Post Update Done")
                return navigate(-1)
            }
        })
        .catch(err=>console.log(err))
    }


    


    const title = "Edit and Update Your Post"
    return (
        <div className='pt-16 bg-slate-100 w-full mx-auto'>
            <HeadingAndTitle heading={title}/>
            <div className="card shrink-0 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
      <form className="card-body border-2 border-[rgba(255,160,0)]" onSubmit={handleSubmit(onSubmit)}>

       <div className='lg:grid grid-cols-2 lg:space-x-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URl</span>
          </label>
          <input type="text" defaultValue={imgURL} placeholder="Image URL"{...register("imgURL")} className="input input-bordered lg:ml-3" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Food Items Name</span>
          </label>
          <input type="text" defaultValue={itemName} placeholder="Food Items Name"{...register("itemName")} className="input input-bordered" required />
        </div>
       

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Country</span>
          </label>
          <input type="text" defaultValue={country} placeholder="Country"{...register("country")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Review</span>
          </label>
          <input type="number" defaultValue={review} placeholder="review"{...register("review")} className="input input-bordered" required />
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Ingredients</span>
          </label>
          <input type="text" defaultValue={ingredients} placeholder="ingredients"{...register("ingredients")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <input type="text" defaultValue={description} placeholder="description"{...register("description")} className="input input-bordered" required />
        </div>
        </div>


        <div className="form-control mt-6">
          <button className="btn border-2 border-[rgba(255,160,0)] hover:border-2 hover:border-[rgba(255,160,0)] ">Update</button>
        </div>
      </form>
    </div>

            
        </div>
    );
};

export default UserUploadDataUpdate;