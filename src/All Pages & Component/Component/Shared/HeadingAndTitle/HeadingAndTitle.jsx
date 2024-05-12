import React from 'react';

const HeadingAndTitle = ({heading,title}) => {
    return (
        <div className='text-center my-8'>
            <h1 className='text-4xl darkGreyText font-lato font-semibold'>{heading} </h1>
            <p className=' mx-auto mt-3 darkGreyText px-1 text-lg font-slab lg:w-1/2'>{title}</p>
        </div>
    );
};

export default HeadingAndTitle;