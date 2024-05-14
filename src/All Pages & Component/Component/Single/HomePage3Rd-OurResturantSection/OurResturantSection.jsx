import React from 'react';
import imgRes from "../../../../assets/ourResturant/SRterrace.jpg"
import { Link } from 'react-router-dom';

const OurResturantSection = () => {
    return (
        <div className='w-full  bg-[#081229] rounded-xl my-10 py-3 lg:py-16'>
                <div className='lg:h-screen'>
                    <h1 className='text-center  font-lato font-bold text-3xl leading-relaxed space-x-2 lg:text-4xl text-[rgba(255,165,0)]  lg:mx-64'>
                        QUALITY & <br className='lg:hidden' /> DELICIOUS  FOOD <br className='lg:hidden' />  WITH SPECTACULAR ENVIRONMENT VIEWS</h1>

                <div className='lg:py-10 flex  flex-col-reverse lg:flex-row mx-2 text-center lg:text-left lg:mx-20 gap-5 lg:gap-10 justify-center  '>
                    <div className='lg:w-full mx-5 lg:mx-0 mb-4 lg:mb-0'>
                    <img className='w-full rounded-lg h-[50vh] lg:h-[80vh]' src={imgRes} alt="" />

                    </div>
                    <div className='w-full font-lato text-slate-300 my-5 ' >
                        <p className='font-semibold text-lg '>
                            Boasting uninterrupted views of Brighton seafront and the iconic West Pier ruins, The Salt Room is a modern British seafood restaurant that celebrates cooking over coal. </p>

                            <p className='font-normal mt-5 lg:mt-16 text-lg '>
                                We take pride in sourcing local ingredients — concentrating on sustainability — to produce a menu of mouth-watering dishes. Using the same techniques as our sister restaurants; The Coal Shed & Burnt Orange, we cook the freshest shellfish and meat over charcoal, ensuring a dining experience to remember. 

                            The same seasonality and innovation that is applied to the menu finds its way into the cocktails, with a selection of drinks changing through the year and with a hint of earthy herbs and sea spices sprinkled throughout.
                            </p>

                            <Link to='/'> <button className='p-2 text-sm rounded-lg hover:bg-slate-600 mt-5 hover:text-orange-400 hover:orangeGlossy   font-semibold border-2 border-orange-500 bg-white darkGreyText'>View Details
                            </button>
                            </Link>
                    </div>
                </div>


                </div>
            
        </div>
    );
};

export default OurResturantSection;