import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Courses.css'

// Code for Courses
const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./API/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="py-5">
            <Container>
                <h2 className="">Our Courses</h2>
                <Row xs={1} md={4} className="g-4 container mx-auto py-5">
                    {
                        courses.map(course => {
                            const { picture, title, duration, price, id, instructor } = course;
                            return (<Col key={id}>
                                <Card className="card">
                                    <div className="img-container">
                                        <Card.Img variant="top" src={picture} className='image' />
                                    </div>
                                    <Card.Body >
                                        <div className="text-start">
                                            <h4 className="fw-bold">{title}</h4>
                                            <p className="text-muted">by {instructor}</p>
                                            <h6>Duration: {duration} </h6>
                                            <h6>Price: ${price} </h6>
                                        </div>
                                        <div>
                                            <button className="btn btn-success">Enroll Now</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;