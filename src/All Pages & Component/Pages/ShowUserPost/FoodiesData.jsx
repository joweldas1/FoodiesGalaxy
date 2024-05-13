import React from 'react';

const FoodiesData = ({data}) => {
    const{country,description,email,imgURL,ingredients,itemName,postedTime,review,userImg,userName} = data.uploadData;
    console.log(data)
    return (
        <div className='pt-16 '>

            <div className="relative border-2     border-[rgba(255,165,0)] lg:flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    className="relative  lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={imgURL}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">


    <div className='flex  items-center gap-3 '>
     <img src={userImg} className='w-10 rounded-full' alt="" />
    <h6
      className="block font-sans text-sm antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      {userName}
    </h6>

    </div>
    <p className='mt-3'>Posted Time : {postedTime}</p>
  
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        <h1>{itemName}</h1>
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
  {description}
    </p>
    <a href="#" className="inline-block"><button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  


        </div>
    );
};

export default FoodiesData;