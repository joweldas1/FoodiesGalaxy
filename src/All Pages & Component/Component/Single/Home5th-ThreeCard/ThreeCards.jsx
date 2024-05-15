import React, { useEffect } from 'react';
import img1 from '../../../../assets/slider/1.jpg'
import img2 from '../../../../assets/slider/service.jpg'
import img3 from '../../../../assets/slider/commitment.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import useAOS from '../../../../../useAOS';

const ThreeCards = () => {
    useEffect(()=>{
        useAOS()
    },[])
    return (
        <div className='mt-20'>

            <div className='flex flex-col-reverse mx-1 lg:flex-row items-center mt-10 gap-5 lg:gap-10 text-center lg:text-left'>
                <div className='w-full lg:w-1/2'data-aos="fade-right" data-aos-easing="ease-in-sine"> 
                <img src={img1} alt="" /> </div>
                <div className='w-full lg:w-1/2'data-aos="fade-left" data-aos-easing="ease-in-sine">
                    <h1 className='font-lato text-5xl tracking-wider font-semibold my-5'>
                        OUR MENUS
                    </h1>
                    <p className='text-lg font-semibold font-slab my-5'>
                        The FoodiesGalaxy is a modern Bangladeshi restaurant that celebrates cooking over coal. Our seaside restaurant is the best restaurant in Brighton to enjoy sustainable, local produce. Drawing on traditional methods of cooking over charcoal, The Salt Room uses a Josper oven to grill fish, seafood and meat dishes.
                    </p>
                    <p className='text-lg font-semibold font-slab my-5'>
                    On offer is a seasonal a la carte menu and seasonal foods list can also be enjoyed in our restaurant and or can make an order here.
                    </p>
                    <Link to='/all-items'>     <button className="btn  border-2 hover:bg-[#081229] border-[rgba(255,165,0)] bg-[#081229] text-slate-200 ">
                    Try our Menus 
  <GoArrowUpRight className='text-[rgba(255,165,0)]'/>
</button>
          </Link>                </div>
            </div>
            

            <div className='flex flex-col-reverse mx-1 lg:flex-row-reverse items-center mt-14 gap-5 lg:gap-10 text-center lg:text-left'>
                <div data-aos="fade-left"
            data-aos-easing="ease-in-sine" className='w-full lg:w-1/2'> 
                <img src={img2} alt="" /> </div>
                <div data-aos="fade-right"
            data-aos-easing="ease-in-sine" className='w-full lg:w-1/2'>
                    <h1 className='font-lato text-5xl tracking-wider font-semibold my-5'>
                        OUR SERVICE
                    </h1>
                    <p className='text-lg font-semibold font-slab my-5'>
                        The FoodiesGalaxy is a modern Bangladeshi restaurant that celebrates cooking over coal. Our seaside restaurant is the best restaurant in Brighton to enjoy sustainable, local produce. Drawing on traditional methods of cooking over charcoal, The Salt Room uses a Josper oven to grill fish, seafood and meat dishes.
                    </p>
                    <p className='text-lg font-semibold font-slab my-5'>
                    On offer is a seasonal a la carte menu and seasonal foods list can also be enjoyed in our restaurant and or can make an order here.
                    </p>
                    <Link to='/all-items'>     <button className="btn  border-2 hover:bg-[#081229] border-[rgba(255,165,0)] bg-[#081229] text-slate-200 ">
                    Try our service 
  <GoArrowUpRight className='text-[rgba(255,165,0)]'/>
</button>
          </Link>                </div>
            </div>

            
            <div className='flex flex-col-reverse mx-1 lg:flex-row items-center mt-14 gap-5 lg:gap-10 text-center lg:text-left'>
                <div className='w-full   lg:w-1/2' data-aos="fade-right"
            data-aos-easing="ease-in-sine "> <img src={img3} alt="" /> </div>
                <div className='w-full lg:w-1/2' data-aos="fade-left"
            data-aos-easing="ease-in-sine">
                    <h1 className='font-lato text-5xl tracking-wider font-semibold my-5'>
                        OUR COMMITMENT
                    </h1>
                    <p className='text-lg font-semibold font-slab my-5'>
                        The FoodiesGalaxy is a modern Bangladeshi restaurant that celebrates cooking over coal. Our seaside restaurant is the best restaurant in Brighton to enjoy sustainable, local produce. Drawing on traditional methods of cooking over charcoal, The Salt Room uses a Josper oven to grill fish, seafood and meat dishes.
                    </p>
                    <p className='text-lg font-semibold font-slab my-5'>
                    On offer is a seasonal a la carte menu and seasonal foods list can also be enjoyed in our restaurant and or can make an order here.
                    </p>
                    <Link to='/all-items'>     <button className="btn  border-2 hover:bg-[#081229] border-[rgba(255,165,0)] bg-[#081229] text-slate-200 ">
                    Try our service 
  <GoArrowUpRight className='text-[rgba(255,165,0)]'/>
</button>
          </Link>                </div>
            </div>

            












        </div>
    );
};

export default ThreeCards;