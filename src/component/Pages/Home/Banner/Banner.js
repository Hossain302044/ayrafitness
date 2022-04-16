import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImg from './../../../../img/banner-img/banner1.png';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className="d-flex align-items-center">
                        <div>
                            <h1 className='fw-bold'>KEEP YOUR BODY<br />
                                fit & <span className='text-blue-color'>Strong</span>
                            </h1>
                            <h5><small className=''>with</small> Hossain Ahmed</h5>
                            <Button as={Link} to='/about' variant="primary" size="lg">Discover More</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img src={bannerImg} alt="" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;