import { Helmet } from 'react-helmet-async';
import Slider from '../../Component/Single/Slider/Slider';
import ResturantHomeShow from '../ResturantFoodAdd/ResturantHomeShow';
import OurResturantSection from '../../Component/Single/HomePage3Rd-OurResturantSection/OurResturantSection';
import AddressHome from '../../Component/Single/Home4th-Adress/AddressHome';
import HomeSecondSlider from '../../Component/Single/HomeSecondSlider/HomeSecondSlider';
import ThreeCards from '../../Component/Single/Home5th-ThreeCard/ThreeCards';

const Home = () => {
    return (
        <div>
            <Helmet> <title> FoodiesGalaxy | Home </title> </Helmet>
            <Slider/>
            <div className='my-20 mx-auto w-full'>
            <ResturantHomeShow />
            <OurResturantSection/>
            <AddressHome/>
            <HomeSecondSlider/>
            <ThreeCards/>
            </div>
                    

        </div>
    );
};

export default Home;