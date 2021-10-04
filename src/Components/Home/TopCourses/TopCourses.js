import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

// Code for top courses
const TopCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./API/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const filteredCourses = courses.filter(course => course.id <= 4)
    return (
        <div className="container py-5">
            <h1 className="py-5 fw-bold">Top Courses</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    filteredCourses.map(fCourse => {
                        const { picture, title, duration, price, id, instructor } = fCourse;
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
        </div>
    );
};

export default TopCourses;