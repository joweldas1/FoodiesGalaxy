import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllItemsCard from './AllItemsCard';
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';
import { Helmet } from 'react-helmet-async';

const   AllItems = () => {
    const [items,setItems] = useState([])
    const [selectCategory,setSelectCategory] = useState('')
    const [setPriceFilter,selectPriceFilter] = useState('')
    const [sellQtyWise,setSellQtyWise] = useState('')
    const [selectSearch,setSelectSearch] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [itemsPerPage,setItemsPerPage] = useState(8)
    const [count,setCount] = useState(0)

    const handleReset=()=>{
        setSelectCategory('')
        selectPriceFilter('')
        setSellQtyWise('')
        setSelectSearch('')
    }

    
    const getData=()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/todaysMeal?category=${selectCategory}&price=${setPriceFilter}&search=${selectSearch}&sell=${sellQtyWise}&page=${currentPage}&size=${itemsPerPage}`)
      .then(res=>setItems(res.data))
      .catch(err=>console.log(err))
    }

    useEffect(()=>{
      getData()      
    },[selectCategory , setPriceFilter ,selectSearch , sellQtyWise])

    useEffect(()=>{
       axios.get(`${import.meta.env.VITE_API_URL}/count?category=${selectCategory}&sort=${setPriceFilter}&search=${selectSearch}&sell=${sellQtyWise}&page=${currentPage}&size=${itemsPerPage}`)
      .then(res=> {console.log(res); setCount(res.data.data)})
      .catch(err=>console.log(err))
    },[selectCategory,setPriceFilter,selectSearch,sellQtyWise])

    const numberOfPages = Math.ceil(count/itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(idx=>idx+1)

    const handlePagination = (value) =>{
        setCurrentPage(value)
        getData()
      
    }





      

    const handleSubmit=(e)=>{
    e.preventDefault()
    const search = e.target.searchValue.value
    setSelectSearch(search)
    }

   


    const heading = "All Available Items "
    const title = "Choose your time, enjoy the moment with delicious food . Once you try our service , you must come again. We are proving Enjoyable and Quality full service"


    return (
        <div className='pt-16'>
          <Helmet><title>FoodiesGalaxy | All Items</title></Helmet>
            <HeadingAndTitle heading={heading} title={title} />

            <div className='mx-2'>
            <div className=' lg:flex items-center justify-between py-2 px-2 border border-[#081229] rounded-lg bg-[rgba(255,165,0)] bg-opacity-75 z-50 mx-auto'>
                <div className='lg:flex lg:space-x-4'>
              <select name="" id="" value={selectCategory}  onChange={(e)=>setSelectCategory(e.target.value)} className='btn btn-sm hidden lg:block btn-primary bg-[rgba(65,131,215)] text-white hover:bg-[rgba(58, 83, 155)]'>
                <option value=""> Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>

              <select className='btn btn-sm hidden md:block btn-primary bg-[rgba(65,131,215)] text-white hover:bg-[rgba(58, 83, 155)]' name="" id="" value={setPriceFilter} onChange={(e)=>selectPriceFilter(e.target.value)}>
                <option value="">Price</option>
                <option value="dsc">High to Low</option>
                <option value="asc">Low to High</option>
              </select>

              <select className='btn  btn-sm btn-primary hidden md:block bg-[rgba(65,131,215)] text-white hover:bg-[rgba(58, 83, 155)]'   name="" id="" value={sellQtyWise} onChange={(e)=>setSellQtyWise(e.target.value)}>
                <option value="">Sell</option>
                <option value="dsc">Hight to Low</option>
                <option value="asc">Low to High</option>
              </select>


           
                </div>

                <div className='flex flex-row-reverse lg:flex-row-reverse  items-end md:items-center gap-2 lg:gap-4'>
                <button className='btn btn-sm btn-primary bg-[rgba(65,131,215)] text-white hover:bg-[rgba(58, 83, 155)]' onClick={handleReset}>
                Reset Query 
            </button>
                <form onSubmit={handleSubmit}>
            <label className="input h-8 input-bordered flex items-center gap-2">
                <input
                type="text"
                name="searchValue"
                value={selectSearch}
                onChange={(e)=>setSelectSearch(e.target.value)}
                className='bg-[rgba(65,131,215)] text-[rgba(255,165,0)]  hover:bg-[rgba(58, 83, 155)]'
                // className="grow "
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
            </div>
            <div className='md:grid md:grid-cols-3  lg:grid-cols-4'>
            {items.map((d,idx)=>(<AllItemsCard d={d} key={idx} />))}
            </div>

            <div className='flex items-center justify-center space-x-3 lg:space-x-4'>
              {pages?.map((data)=>( 
                <div className='' key={data}>
                                  <button className=' bg-orange-500 px-3 my-3 text-white ' onClick={()=>handlePagination(data)}> {data} </button>

                </div>
               ))}
            </div>

        </div>
    );
};

export default AllItems;