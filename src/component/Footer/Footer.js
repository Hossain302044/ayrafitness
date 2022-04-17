import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h4 className='fw-bold'>About us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa velit perspiciatis</p>
                        <div className='footer-socail-icons d-flex'>
                            <div className='footer-socail-icon'>
                                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            </div>
                            <div className='footer-socail-icon'>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </div>
                            <div className='footer-socail-icon'>
                                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </div>
                            <div className='footer-socail-icon'>
                                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                            </div>
                            <div className='footer-socail-icon'>
                                <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4 className='fw-bold'>Quick Links</h4>
                        <div className='footer-menus'>
                            <Link className='footer-link' to=''>Home</Link>
                            <Link className='footer-link' to=''>About</Link>
                            <Link className='footer-link' to=''>Services</Link>
                            <Link className='footer-link' to=''>Blogs</Link>
                            <Link className='footer-link' to=''>Contact</Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4 className='fw-bold'>Open Hours</h4>
                        <div className='d-flex justify-content-between'>
                            <p>Monday - Friday</p>
                            <p>8.00AM - 12.00PM</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Saturday</p>
                            <p>9.00AM - 8.00PM</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Monday - Thusday</p>
                            <p>9.00AM - 10.00PM</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4 className='fw-bold'>Newsletter</h4>
                        <p>subscribe to our newsletter to get allour news in your inbox..</p>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="email address"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className='newslate-input'
                                />
                                <Button variant="light" id="button-addon2">
                                    <FontAwesomeIcon className='footer-icon-send' icon={faPaperPlane}></FontAwesomeIcon>
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <footer>
                            <p>
                                <small>Copywrite © {year} AyraFitness. Develop By Hossain Ahmed</small>
                            </p>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;