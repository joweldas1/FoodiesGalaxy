import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet-async';




const UserCreatePost = () => {
    const [startDate, setStartDate] = useState  (new Date());

    const title=<>Share Your Best Food <br />  Experience With Us</>;
    const navigate = useNavigate()

    const {user} = UseAuth()
    const email = user?.email;
    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const postedTime = startDate.toLocaleString()
    

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    
    const onSubmit = async(data) => {
        const uploadData = {...data,email,userName,userImg,postedTime}
        
        await axios.post(`${import.meta.env.VITE_API_URL}/user-post`,{uploadData})
        .then(res=> {
              if(res.data.acknowledged===true){
              toast.success("Your post successfully done")
              // return navigate('/foodTours')
            }
          })
        .catch(err=> console.log("error----->",err) )
    }






    return (
        <div className='pt-16 bg-slate-100 w-full mx-auto'>
          <Helmet><title>FoodiesGalaxy | User's Post form</title></Helmet>

            <HeadingAndTitle heading={title}/>
            <div className="card shrink-0 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
      <form className="card-body border-2 border-[rgba(255,160,0)]" onSubmit={handleSubmit(onSubmit)}>

       <div className='lg:grid grid-cols-2 lg:space-x-3 '>
       <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Image URl</span>
          </label>
          <input type="text" placeholder="Image URL"{...register("imgURL")} className="input input-bordered lg:ml-3" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Food Items Name</span>
          </label>
          <input type="text" placeholder="Food Items Name"{...register("itemName")} className="input input-bordered" required />
        </div>
       

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Country</span>
          </label>
          <input type="text" placeholder="Country"{...register("country")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Review</span>
          </label>
          <input type="number" placeholder="review"{...register("review")} className="input input-bordered" required />
        </div>

        
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Ingredients</span>
          </label>
          <input type="text" placeholder="ingredients"{...register("ingredients")} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <input type="text" placeholder="description"{...register("description")} className="input input-bordered" required />
        </div>
        </div>


        <div className="form-control mt-6">
          <button className="btn border-2 border-[rgba(255,160,0)] hover:border-2 hover:border-[rgba(255,160,0)] ">Post</button>
        </div>
      </form>
    </div>

            
        </div>
    );
};

export default UserCreatePost;