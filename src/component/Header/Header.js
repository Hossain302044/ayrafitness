import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from './../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar bg="light" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='fw-bold'><span className='text-blue-color'>Ayra</span>Fitness</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            {
                                !user?.uid
                                    ?
                                    <>
                                        <Nav.Link as={Link} to="/login"><FontAwesomeIcon icon={faUser} className="me-1"></FontAwesomeIcon>Login</Nav.Link>
                                        <Nav.Link as={Link} to="/signup"><FontAwesomeIcon icon={faUser} className="me-1"></FontAwesomeIcon>Signup</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link><FontAwesomeIcon icon={faUser} className="me-1"></FontAwesomeIcon>{user.displayName}</Nav.Link>
                                        <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login"><FontAwesomeIcon icon={faArrowRightFromBracket} className="me-1"></FontAwesomeIcon>Signout</Nav.Link>
                                    </>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;