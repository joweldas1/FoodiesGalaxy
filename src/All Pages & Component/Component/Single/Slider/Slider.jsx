import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination ,Autoplay} from 'swiper/modules';
import SliderContent from './SliderContent';

import img1 from '../../../../assets/slider/1.jpg'
import img2 from '../../../../assets/slider/2.jpg'
import img3 from '../../../../assets/slider/3.jpg'




const Slider = () => {
    return (
        <Swiper pagination={true} modules={[Pagination ,Autoplay ,Pagination]} className="mySwiper"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
          loop={true}

        >
        <SwiperSlide>
            <SliderContent 
            img={img1}
            heading={ <> Welcome to <br />  FoodiesGalaxy </> }
            heading2={'Please Come and Enjoy Delicious Food in an Awesome Environment'}
            title={`Welcome to FoodiesGalaxy, where gastronomy meets innovation. Step into a realm where every dish tells a story, and every bite ignites your taste buds. `}
            />  
        </SwiperSlide>

        <SwiperSlide>
            <SliderContent 

            img={img2}
            heading={ <> Explore Our Exquisite Menu </> }
            heading2={'Discover a Symphony of Flavors'}
            title={`Embark on a culinary journey like no other as you explore the exquisite menu at FoodiesGalaxy. From mouthwatering appetizers to decadent desserts, each dish is meticulously crafted to tantalize your palate and satisfy your cravings `}
            />  
        </SwiperSlide>

        <SwiperSlide>
            <SliderContent 
            img={img3}
            heading={ <>  Experience Unmatched Hospitality </> }
            heading2={'Please Come and Enjoy Delicious Food in an Awesome Environment'}
            title={`At FoodiesGalaxy, hospitality is more than just a service—it's a promise. From the moment you step through our doors, our dedicated team is committed to ensuring your dining experience exceeds all expectations. Immerse yourself in an ambiance of warmth and sophistication as our attentive staff cater to your every need with genuine care and professionalism.  `}
            />  
        </SwiperSlide>
       
     
      </Swiper>
    );
};

export default Slider;