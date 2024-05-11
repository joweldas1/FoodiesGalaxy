import React from 'react';
import { Link } from 'react-router-dom';

const ResturantCard = ({d}) => {
    const {category,description,foodImage,foodName,ingredients,price,origin,_id} =d
    return (
        <div>


<div className="w-full relative imgH max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover w-full  delay-1000   inset-0 h-56" src={foodImage} alt="avatar" />
    <div className=' text-white text-center imgD flex items-center justify-center text-2xl flex-col absolute hover:top-0 top-60 bg-opacity-60 text-opacity-100 w-full h-full '>
        <h1>{foodName}</h1>
        <h1>{price}/-</h1>
        <button className='py-2 bg-blue-800 text-white text-xs px-2 my-2 after:bg-red-600'>
        <Link to={`/food-details/${_id}`}> View Details</Link>
 </button>
    </div>

</div>
            
        </div>
    );
};

export default ResturantCard;