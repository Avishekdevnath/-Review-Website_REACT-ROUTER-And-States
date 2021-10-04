import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Slider.css'

// Code for slider
const Slider = () => {
    return (
        <div className="slider-style Home-title">
            <Container>
                <div >
                    <h1 className="text-center text-white">Welcome To The World Of Music</h1>
                    <Link to="/course"><button className="btn btn-primary text-black fw-bold slider-btn" >Get Started</button> </Link>
                </div>
            </Container>


        </div>
    );
};

export default Slider;