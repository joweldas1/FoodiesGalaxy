import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const AllItemsCard = ({d}) => {
    const {user} =UseAuth()
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
        totalSell
        } =d

        console.log(totalSell);
    return (
        <div>
            

<div className=" border overflow-hidden m-1 sellP  border-gray-200 rounded-lg shadow bg-[#333652]">
    <div className='imgHover relative'>
    <img className="rounded-t-lg hover:scale-125 w-full h-72 lg:h-52  "  src={foodImage} alt="" />
  


    </div>

    <div className="p-5 ">
    <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
        </a>
            <div className='flex items-center'>
            <div className='flex-1'>
     
     <p className="mb-3 font-normal text-white">Price : {price}</p>
     <p className="mb-3 font-normal text-white">Sell : {totalSell}</p>
     <p className="mb-3 font-normal text-white">Category : {category}</p>
     <Link to={`/food-details/${_id}`} href="#" className="btn btn-sm hover:bg-red-700 bg-orange-700 text-white text-xs p-1 rounded-lg shadow-xl ">
         See More

     </Link>
   </div>

   <div className='lg:ml-3'>
     {
         totalSell>0?<div className='  flex   flex-col w-28  py-5 text-white rounded-full items-center justify-center  text-center'>
         <p className='font-bold text-3xl font-lato text-[rgba(255,160,0)]'>{totalSell}</p>
         <p className=' font-lato font-medium'>Times Sell</p>
     </div>:''
     }
   </div>
            </div>

    
    </div>
</div>

        </div>
    );
};

export default AllItemsCard;