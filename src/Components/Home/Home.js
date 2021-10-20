import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Welcome from '../Welcome/Welcome';

import './Home.css'


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Welcome></Welcome>
            <Blog></Blog>
            <About></About>


        </div>
    );
};

export default Home;