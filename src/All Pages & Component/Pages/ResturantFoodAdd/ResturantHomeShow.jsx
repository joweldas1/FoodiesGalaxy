import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ResturantCard from './ResturantCard';
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';
import { Link } from 'react-router-dom';


const ResturantHomeShow = () => {
    const [homeData ,setHomeData ] = useState()

  
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/todaysMeal`)
        .then(data=>{setHomeData(data.data)})
        .catch(err=>console.log(err))
    },[])

    const heading = "Check Out Our Dishes";
    const title = "We are proving best server at cheap price within your 3 times meal in day. You can place a order form her you if want you can try awesome dished with our delight place"



   

    return (
        <div>
          <HeadingAndTitle heading={heading} title={title}/>
              <Tabs>
                  <TabList 
                  className='flex justify-center items-center space-x-6 font-lato font-bold '>
                    <Tab  id='tabs' className='tab'>Breakfast</Tab>
                    <Tab  id='tabs' className='tab'>Lunch</Tab>
                    <Tab  id='tabs' className='tab'>Dinner</Tab>
                  </TabList>

    <div className='my-5'>
              <TabPanel>
                  <div className=' grid mx-2 grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                  {homeData?.filter(f=>f.category === "breakfast").slice(0,8).map((d,idx)=>( <ResturantCard key={idx} d={d}></ResturantCard> ))}
                  </div>
              </TabPanel>

              <TabPanel>
                  <div className=' grid mx-2 grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                  {homeData?.filter(f=>f.category === "lunch").slice(0,8).map((d,idx)=>( <ResturantCard key={idx} d={d}></ResturantCard> ))}
                  </div>
              </TabPanel>

              <TabPanel>
                  <div className=' grid mx-2 grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                  {homeData?.filter(f=>f.category === "dinner").slice(0,8).map((d,idx)=>( <ResturantCard key={idx} d={d}></ResturantCard> ))}
                  </div>
              </TabPanel>
    </div>
  </Tabs>
  <div className='text-center'>
    <button className='btn btn-sm bg-lime-700 text-white'> <Link to="/all-items">All Items</Link> </button>
  </div>
        </div>
    );
};

export default ResturantHomeShow;