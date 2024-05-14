import React, { useEffect } from 'react';
import useAOS from '../../../../../useAOS';


const HeadingAndTitle = ({heading,title}) => {
   
    return (
        <div className='text-center my-8'>
            <h1 className='text-4xl darkGreyText font-lato font-semibold' data-aos="fade-up" data-aos-anchor-placement="top-center">{heading} </h1>
            <p className=' mx-auto mt-3 darkGreyText px-1 text-lg font-slab lg:w-1/2'
            data-aos="fade-up"
            data-aos-anchor-placement="top-center">{title}</p>
        </div>
    );
};

export default HeadingAndTitle;