import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UserUploadShowCard = ({data,idx,getData}) => {
    const allData = data?.uploadData;
    const{country,description,email,imgURL,ingredients,itemName,postedTime,review,userImg,userName} = allData
    const {_id} = data

    const handleDelete =(id)=>{
        axios.delete(`${import.meta.env.VITE_API_URL}/delete-user-post/${_id}`)
        .then(res=>{
                if(res.data.deletedCount>0)
                getData()
                toast.success("Post Deleted Successfully") 
        })
        .catch(err=>console.log(err))
    }



    return (
        <div>

<div className='flex items-center justify-center   '>
    <div className=' mx-auto bg-white rounded-3xl shadow-xl'>
         <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100  flex-col">
      <img
          src={imgURL}
          width="375"
          height="200"
         className="rounded-t-3xl justify-center grid h-80 object-cover"
          alt=""
        /> 

      <div className="group p-6 grid z-10">
        <a
          
          className="group-hover:text-cyan-700 font-bold text-2xl line-clamp-2"
        >
         {itemName}
        </a>
        <span className="text-slate-400 pt-2 font-semibold">
          Uploaded : {postedTime}
        </span>
       
        <div className=" grid-cols-2 flex group justify-between">
          <div className="font-black flex flex-col">
            <span className="text-yellow-500 text-xl">Review</span>
            <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
             {review}/10
  
            </span>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-7" />
            <span className="text-3xl  font-bold  gap-x-2 text-slate-300">
              {idx + 1}
            </span>
          </div>
      </div>
      <div className='space-x-4 mt-2'>
    <button onClick={()=>handleDelete(_id)} className='bg-[rgba(255,160,0)] text-sm font-semibold px-1 rounded-sm text-lato shadow-2xl'>Delete</button>
    <Link to={`/update-user-post/${_id}`}> <button className='bg-blue-800 text-sm font-semibold px-1 rounded-sm text-lato shadow-2xl text-white'>Edit</button>
</Link>
</div>
    </div>
    </div>
</div>







            
        </div>

        </div>
    );
};

export default UserUploadShowCard;