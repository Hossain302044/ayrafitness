import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hossain from './../../../../img/about/hossain-ahmed.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col md={6}>
                        <div className="img-fluid">
                            <img src={hossain} height={500} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div className="about-mySelf">
                            <h2>Mohammad Hossain Ahmed</h2>
                            <p><small>student</small> At Programinng Hero</p>
                            <p>I am Hossain Ahmed Ashiq. I did complete my diploma in computer technology .</p>
                            <p>I am currently working on an ecommerce company as a web designer (wordpress customize or html & css) & graphics designer.</p>
                            <p>Due to my current job at the company, I have been given less time in my practice. I have decided on my own. After Eid, I will resign from my current job. My dream since Diploma First was to become a full-fledged web developer.I want to work harder and develop better as a full stack developer up front.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;