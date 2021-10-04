import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

// Code for about section
const About = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch('./API/about.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className="about">
            <Container>
                <div className="py-5">
                    <h2>About us</h2>
                    <h5> <span className="m-logo fw-bold">Music Academy</span> is a dream institute for those who want to learn music. Who bring industry experts together to make future musicians. You have so many beginner-friendly courses. Our students are doing great in the music world.</h5>
                </div>
                <div>
                    <h2>Our Teachers</h2>
                    <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                        {
                            members.map(member => {
                                const { id, picture, name, designation } = member;
                                return (
                                    <Col key={id}>
                                        <img alt="img" src={picture} className="rounded-circle mb-5 img-fluid img-style" />
                                        <h5> <b>{name}</b></h5>
                                        <p>{designation}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;