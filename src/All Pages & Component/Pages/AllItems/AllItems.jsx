import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllItemsCard from './AllItemsCard';
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';

const AllItems = () => {
    const [items,setItems] = useState([])


    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/todaysMeal`)
        .then(res=>setItems(res.data))
        .catch(err=>console.log(err))
    },[])

    const heading = "All Available Items "
    const title = "Choose your time, enjoy the moment with delicious food . Once you try our service , you must come again. We are proving Enjoyable and Quality full service"

    console.log(items);


    return (
        <div className='pt-16'>
            <HeadingAndTitle heading={heading} title={title} />

            <div className=' flex items-center justify-between bg-lime-800 bg-opacity-75 z-50 mx-auto'>
                <div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter View</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box ">
                    <li><a> Breakfast </a></li>
                    <li><a>Lunch</a></li>
                    <li><a>Dinner</a></li>
                </ul>
                </div>

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter Sell</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box ">
                    <li><a> Best to Low </a></li>
                    <li><a>Low to Best</a></li>
                </ul>
            </div>

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter Price</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box ">
                    <li><a> High to Low</a></li>
                    <li><a>Low to High</a></li>
                </ul>
            </div>
                </div>

                <div>
                    <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                  
               
                </div>
           
       
                

                

            </div>
            <div className='grid md:grid-cols-3  lg:grid-cols-4'>
            {items.map((d,idx)=>(<AllItemsCard d={d} key={idx} />))}

            </div>
        </div>
    );
};

export default AllItems;