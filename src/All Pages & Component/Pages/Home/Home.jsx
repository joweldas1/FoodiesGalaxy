import { Helmet } from 'react-helmet-async';
import Slider from '../../Component/Single/Slider/Slider';
import ResturantHomeShow from '../ResturantFoodAdd/ResturantHomeShow';

const Home = () => {
    return (
        <div>
            <Helmet> <title> FoodiesGalaxy | Home </title> </Helmet>
            <Slider/>
            <div className='my-20 mx-auto w-full'>
            <ResturantHomeShow />
            </div>
                    

        </div>
    );
};

export default Home;