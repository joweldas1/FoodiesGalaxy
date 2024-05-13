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
    return (
        <div>
            

<div className="max-w-sm bg-white border overflow-hidden m-1 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<img className="rounded-t-lg hover:scale-125  "  src={foodImage} alt="" />

    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : {price}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sell : {totalSell}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category : {category}</p>
        <Link to={`/food-details/${_id}`} href="#" className=" bg-orange-700 text-white text-xs p-1 rounded-lg shadow-xl ">
            See More

        </Link>
    </div>
</div>

        </div>
    );
};

export default AllItemsCard;