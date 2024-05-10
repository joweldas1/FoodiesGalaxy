import { Helmet } from 'react-helmet-async';
import Slider from '../../Component/Single/Slider/Slider';
import UseAuth from '../../Hooks/UseAuth';

const Home = () => {
    return (
        <div>
            <Helmet> <title> FoodiesGalaxy | Home </title> </Helmet>
            <Slider/>
            <div className='h-48 w-28'>

            </div>

        </div>
    );
};

export default Home;