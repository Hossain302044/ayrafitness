import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, CardGroup, Container, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './ServicesDetailes.css';

const ServicesDetailes = () => {
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <CardGroup className='card-price'>
                        <Card className='border-0 card-design'>
                            <Card.Body>
                                <Card.Title className='text-center'>STANDARD</Card.Title>
                                <p className='text-center'><span className='price-tag'>$9/</span>mo</p>
                                <Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>7 classes per week</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Group Lessons</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Personal Training</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Home Training</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Six Month memberships</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>20 sessions Free Massage</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                </Card.Text>
                                <Button as={Link} to='/checkout' className="mx-3 submit-btn" variant="outline-primary">
                                    Join Member
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className='border-0 card-design'>
                            <Card.Body>
                                <Card.Title className='text-center'>PREMIUM</Card.Title>
                                <p className='text-center text-primary'><span className='price-tag'>$15/</span>mo</p>
                                <Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>7 classes per week</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Group Lessons</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Personal Training</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Home Training</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Six Month memberships</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>20 sessions Free Massage</p>
                                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                                    </div>
                                </Card.Text>
                                <Button as={Link} to='/checkout' className="mx-3 submit-btn" variant="primary">
                                    Join Member
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className='border-0 card-design'>
                            <Card.Body>
                                <Card.Title className='text-center'>PLATINUM</Card.Title>
                                <p className='text-center'><span className='price-tag'>$20/</span>mo</p>
                                <Card.Text className='mx-3'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>7 classes per week</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Group Lessons</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Personal Training</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Home Training</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>Six Month memberships</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p>20 sessions Free Massage</p>
                                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                                    </div>
                                </Card.Text>
                                <Button as={Link} to='/checkout' className="mx-3 submit-btn" variant="outline-primary">
                                    Join Member
                                </Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>
        </>
    );
};

export default ServicesDetailes;