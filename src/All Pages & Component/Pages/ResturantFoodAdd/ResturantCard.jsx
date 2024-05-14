import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAOS from '../../../../useAOS';

const ResturantCard = ({d}) => {
    useEffect(()=>{
        useAOS()
    },[])
    const {category,description,foodImage,foodName,ingredients,price,origin,_id} =d
    return (
        <div>


<div  data-aos="fade-up" data-aos-anchor-placement="top-center"
 className= "w-full relative imgH max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img  
     className="object-cover w-full  delay-1000   inset-0 h-56" 
    src={foodImage} alt="avatar" />
    <div className=' text-white text-center imgD flex items-center justify-center text-2xl flex-col absolute hover:top-0 top-60 bg-opacity-60 text-opacity-100 w-full h-full '>
        <h1>{foodName}</h1>
        <h1>{price}/-</h1>
        
 <Link  to={`/food-details/${_id}` }> <button className='p-2 text-sm rounded-lg hover:bg-gray-700 hover:text-orange-400 hover:orangeGlossy  font-semibold border-2 border-orange-500 bg-white darkGreyText'>View Details
 </button></Link>

    </div>

</div>
            
        </div>
    );
};

export default ResturantCard;