import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllItemsCard = ({d}) => {
  
    const {user} =UseAuth()

console.log(d);
    const {
        _id,    
        category,
        description,
        foodImage,
        foodName,
        ingredients,
        madeBy,
        origin,
        price,
        remain,
        totalSell
        } =d
console.log(remain);
        const cate = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

        console.log(totalSell);
    return (
        <div>
            

<div className=" border overflow-hidden m-1 sellP lg:   h-[70vh] border-[rgba(255,165,0)] rounded-lg shadow bg-gray-200 ">
    <div className='imgHover relative'>
    <img className="rounded-t-lg hover:scale-125 w-full h-72 lg:h-52  "  src={foodImage} alt="" />
  


    </div>

    <div className=" p-2   ">
    <a href="#">
            <h5 className="mb-2 text-[20px] h-6 font-bold tracking-tight text-gray-950">{foodName.slice(0,20)}</h5>
        </a>
            <div className='flex items-center'>
            <div className='flex-1 h-36 my-1'>
     
     <p className="mb-2 font-semibold text-gray-950">Price : {price} /-</p>
     <p className="mb-2 font-semibold text-gray-950">Made by : {madeBy}</p>
     <p className="mb-2 font-semibold text-gray-950">Category : {cate}</p>
     <p className="mb-2 font-semibold text-gray-950">RemainingQty : {remain}</p>
    
   </div>

   <div className='lg:ml-3'>
     {
         totalSell>0?<div className='  flex   flex-col w-28  py-5 text-white rounded-full items-center justify-center  text-center'>
         <p className='font-bold text-5xl font-lato text-[rgba(255,160,0)]'>{totalSell}</p>
         <p className=' font-lato text-gray-900 font-medium'>Times Sell</p>
     </div>:''
     }
   </div>
            </div>


            <div className='flex w-full items-center'>

            <Link to={`/food-details/${_id}`} href="#" className="btn btn-sm w-4/5 hover:bg-red-700 bg-orange-700 text-white text-xs p-1 rounded-lg shadow-xl ">
             See More
             </Link>
             <div className='w-1/5 flex text-2xl justify-between ml-1'>
             <Link to={`/updateResUpload/${_id}`} > <FaRegEdit className='text-[rgba(255,165,0)]'/> </Link>
             <MdDelete className='text-red-600'/>
             </div>


            </div>
          
    
    </div>
</div>

        </div>
    );
};

export default AllItemsCard;