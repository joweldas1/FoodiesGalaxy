
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';
import { GoArrowUpRight } from "react-icons/go";


import img1 from '../../../../assets/slider/1.jpg';
import img2 from '../../../../assets/slider/2.jpg';
import img3 from '../../../../assets/slider/3.jpg';
import img4 from '../../../../assets/slider/asian-food-4.jpg';
import img5 from '../../../../assets/slider/image.png';
import img6 from '../../../../assets/slider/lunch-setup-with-teriyaki-chicken-green-salad-mushroom-soup-bread-orange-juice-140725-6907.jpg';
import img7 from '../../../../assets/slider/traditional-full-english-breakfast-with-fried-eggs-sausage-tomato-beans-toast-bacon-plate_1150-37820.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useAOS from '../../../../../useAOS';



const HomeSecondSlider = () => {
useEffect(()=>{
  useAOS()
},[])


    return (
        
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className='lg:my-10 text-sm font-semibold w-full py-10 mx-auto bg-[#081229]'>
                            <p className='text-center text-[rgba(255,165,0)]'><span >HOME</span> | <span>All Post</span></p>

            
            <h1 className='text-center  font-lato font-medium text-3xl lg:text-4xl my-5 text-[rgba(255,165,0)]'>Our Goal To Provide Delicious Service to <br className='hidden lg:block' /> Our Customer</h1>
            <div className='text-center mb-10'>
                <Link to='/all-items'>     <button className="btn  border-2 hover:bg-[#081229] border-[rgba(255,165,0)] bg-[#081229] text-slate-200 ">
                    Try our service 
  <GoArrowUpRight className='text-[rgba(255,165,0)]'/>
</button>
          </Link>
         </div>




      <div className='mx-2 lg:mx-10'>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        loop={true}

        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full sellP h-40 lg:h-72 ' src={img7} alt="" /></SwiperSlide>
     
      </Swiper>
      </div>
        </div>
    );
};

export default HomeSecondSlider;