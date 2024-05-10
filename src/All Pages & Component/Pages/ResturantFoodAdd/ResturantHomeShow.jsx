import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ResturantCard from './ResturantCard';


const ResturantHomeShow = () => {
    const [homeData ,setHomeData ] = useState()

    const handleE=()=>{
        
        console.log("data");
    }

    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/todaysMeal`)
        .then(data=>{setHomeData(data.data)})
        .catch(err=>console.log(err))
    },[])
    console.log(homeData);
   

    return (
        <div>
              <Tabs>
    <TabList 
     className='flex justify-center items-center space-x-6 '>
      <Tab onClick={handleE} id='tabs' className='tab'>Breakfast</Tab>
      <Tab onClick={handleE} id='tabs' className='tab'>Lunch</Tab>
      <Tab onClick={handleE} id='tabs' className='tab'>Dinner</Tab>
    </TabList>

    <div className='my-5'>
    <TabPanel>
        <div className=' grid mx-2 grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
        {homeData?.map((d,idx)=>( <ResturantCard key={idx} d={d}></ResturantCard> ))}
        </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    </div>
  </Tabs>
        </div>
    );
};

export default ResturantHomeShow;