import React from 'react';
import img1 from '../../../assets/errorpage/errorImg.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='w-full h-[60vh]  justify-center items-center'>
            <Helmet><title>FoodiesGalaxy | Error Page</title></Helmet>
            <div className='relative mt-52 lg:mt-0 '>
                <h1 className='text-center lg:absolute left-[40%] top-12 text-2xl font-medium'>Oppos, Something wrong <br />Please back to home</h1>
                <img src={img1} className='w-full' alt="" />
                <div className='absolute top-[59%] left-[44%] lg:left-[48%]'>
               
                <Link to='/'> <button className='p-2 text-sm rounded-lg hover:bg-slate-600 mt-5 hover:text-orange-400 hover:orangeGlossy   font-semibold border-2 border-orange-500 bg-white darkGreyText'>Home
                            </button>
                            </Link>
                </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;