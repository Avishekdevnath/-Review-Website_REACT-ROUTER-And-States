import React from 'react';
import './Home.css'
import Welcome from './Slider/Welcome';
import TopCourses from './TopCourses/TopCourses';

// Code for home page
const Home = () => {
    return (
        <div>
            <Welcome></Welcome>
            <TopCourses></TopCourses>
        </div>
    );
};

export default Home;