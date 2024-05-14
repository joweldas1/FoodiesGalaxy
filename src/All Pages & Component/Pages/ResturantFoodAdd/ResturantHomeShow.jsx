import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ResturantCard from './ResturantCard';
import HeadingAndTitle from '../../Component/Shared/HeadingAndTitle/HeadingAndTitle';
import { Link } from 'react-router-dom';
import UseAxios from '../../Hooks/UseAxios';


const ResturantHomeShow = () => {
    const [homeData ,setHomeData ] = useState()
    const axiosUrl = UseAxios()

  
    useEffect(()=>{
        // axios.get(`${import.meta.env.VITE_API_URL}/all-food`,{withCredentials:true})
        axiosUrl.get('/all-food')
        .then(data=>{setHomeData(data?.data)})
        .catch(err=>console.log(err)) 
    },[])

    const heading = "Check Out Our Dishes";
    const title = "We are proving best server at cheap price within your 3 times meal in day. You can place a order form her you if want you can try awesome dished with our delight place"



   

    return (
        <div>
          <HeadingAndTitle heading={heading} title={title}/>
              <Tabs>
                  <TabList data-aos="fade-up" data-aos-anchor-placement="bottom-center"
                  className='flex justify-center items-center space-x-6 font-lato font-bold '>
                    <Tab  id='tabs' className='tab'>Breakfast</Tab>
                    <Tab  id='tabs' className='tab'>Lunch</Tab>
                    <Tab  id='tabs' className='tab'>Dinner</Tab>
                    <Tab  id='tabs' className='tab hidden lg:block'>All time Favorite  </Tab>
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
              <TabPanel>
                <div className='h-full text-center bg-black text-white font-bold py-24 rounded-md text-2xl' >
                    <h1>This Section Will Available Soon</h1>
                </div>
                  
              </TabPanel>
    </div>
  </Tabs>
  <div  className=' text-center'>
    <button  className=' p-2 rounded-lg border-2 border-[rgba(255,160,0)] hover:bg-gray-700 hover:text-orange-400 hover:orangeGlossy  text-black font-semibold '> <Link to="/all-items">All Items</Link> </button>
  </div>
        </div>
    );
};

export default ResturantHomeShow;