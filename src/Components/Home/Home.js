import React from 'react';
import './Home.css'
import Slider from './Slider/Slider';
import TopCourses from './TopCourses/TopCourses';

// Code for home page
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopCourses></TopCourses>
        </div>
    );
};

export default Home;