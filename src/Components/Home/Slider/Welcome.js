import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Welcome.css';

// Code for Welcome Section
const Welcome = () => {
    return (
        <div className="welcome-style Home-title">
            <Container>
                <div >
                    <h1 className="text-center text-white welcome-title py-2">Welcome To The World Of Music</h1>
                    <h4 className="text-center text-white py-3">Learn remotely shine internationally</h4>
                    <Link to="/course"><button className="btn btn-primary text-black fw-bold welcome-btn" >Get Started</button> </Link>
                </div>
            </Container>


        </div>
    );
};

export default Welcome;