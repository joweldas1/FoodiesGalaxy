import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllItemsCard from './AllItemsCard';
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';

const AllItems = () => {
    const [items,setItems] = useState([])
    const [selectCategory,setSelectCategory] = useState('')
    const [setPriceFilter,selectPriceFilter] = useState('')
    const [sellQtyWise,setSellQtyWise] = useState('')
    const [selectSearch,setSelectSearch] = useState('')

    const handleReset=()=>{
        setSelectCategory('')
        selectPriceFilter('')
        setSellQtyWise('')
        setSelectSearch('')
    }

    


    useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/todaysMeal?category=${selectCategory}&sort=${setPriceFilter}&search=${selectSearch}&sell=${sellQtyWise}`)
    .then(res=>setItems(res.data))
    .catch(err=>console.log(err))
      
    },[selectCategory , setPriceFilter ,selectSearch , sellQtyWise])


      

    const handleSubmit=(e)=>{
    e.preventDefault()
    const search = e.target.searchValue.value
    setSelectSearch(search)
    }

   


    const heading = "All Available Items "
    const title = "Choose your time, enjoy the moment with delicious food . Once you try our service , you must come again. We are proving Enjoyable and Quality full service"


    return (
        <div className='pt-16'>
            <HeadingAndTitle heading={heading} title={title} />

            <div className=' flex items-center justify-between bg-lime-800 bg-opacity-75 z-50 mx-auto'>
                <div>
              <select name="" id="" value={selectCategory}  onChange={(e)=>setSelectCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Breakfast</option>
              </select>

              <select name="" id="" value={setPriceFilter} onChange={(e)=>selectPriceFilter(e.target.value)}>
                <option value="">Filter Price</option>
                <option value="asc">High to Low</option>
                <option value="dsc">Low to High</option>
              </select>

              <select name="" id="" value={sellQtyWise} onChange={(e)=>setSellQtyWise(e.target.value)}>
                <option value="">Filter Sell</option>
                <option value="asc">Hight to Low</option>
                <option value="dsc">Low to High</option>
              </select>

            <button onClick={handleReset}>
                Reset Query 
            </button>
                </div>

                <div>
                <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
                <input
                type="text"
                name="searchValue"
                value={selectSearch}
                onChange={(e)=>setSelectSearch(e.target.value)}
                className="grow"
                placeholder="Search"
                />
        <button  type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </button>
      </label>
    </form>
                  
               
                </div>
           
       
                

                

            </div>
            <div className='grid md:grid-cols-3  lg:grid-cols-4'>
            {items.map((d,idx)=>(<AllItemsCard d={d} key={idx} />))}

            </div>
        </div>
    );
};

export default AllItems;