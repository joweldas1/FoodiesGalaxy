import React, { useEffect } from 'react';
import useAOS from '../../../../../useAOS';

const AddressHome = () => {
    useEffect(()=>{
        useAOS()
    },[])
    return (
        <div className=' my-20 lg:my-36'  data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <div>

                <div className='text-center mx-1'>
                    <h1 className='font-slab text-3xl lg:text-4xl'>
                        106 King's Road, Brighton, East Sussex, BN1 2FU
                    </h1>
                    <p className='font-lato my-2 font-medium'>info@foodiesgalaxy.co.bd / (+880) 1273 929488</p>
                </div>

                <div className='text-center mt-6'>
                    <p className='text-lg font-semibold '>Opening Times</p>
                    <div className='font-lato grid grid-cols-2 lg:grid-cols-4  justify-around text-lg my-5 mx-20'>
                            <p className='font-bold'>Mon - Sat</p>
                            <p>24 Hour</p>
                            <p className='font-bold'>Sunday</p>
                            <p>9Am - 9PM</p>
                    </div>
                </div>

                <p className='text-center text-lg font-slab font-medium'> 
                    <span className='font-bold'>Please note:</span> You can make order  in this website within this schedule 
                    </p>

                    <p className='text-center text-lg font-slab lg:w-1/2 mx-auto mt-3 font-medium'><span className='font-bold'>Parking:</span> There are a number of pay-to-park multi-storey car parks located within a short walk of The Salt Room near <span className='font-bold'>FoodiesGalaxy</span>.
                    </p>


            </div>
        </div>
    );
};

export default AddressHome;