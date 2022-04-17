import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import google from './../../../img/icon/google.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [signInWithGoogle, user1, loading1] = useSignInWithGoogle(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <>
            <div className=''>
                <Container>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='login-width mt-5'>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='login-Circle'>
                                            <FontAwesomeIcon className='icon-login' icon={faUser}></FontAwesomeIcon>
                                        </div>
                                        <h2 className='mt-2'>Please Login</h2>
                                    </div>
                                    <Form onSubmit={handleUserSignIn}>
                                        <Form.Group className="m-3" controlId="formBasicEmail">
                                            <Form.Control onBlur={handleEmailBlur} className='input-feild' type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="m-3" controlId="formBasicPassword">
                                            <Form.Control onBlur={handlePasswordBlur} className='input-feild' type="password" placeholder="Password" />
                                        </Form.Group>
                                        <p className="m-3" style={{ color: "red" }}>{error?.message}</p>
                                        <Button className="mx-3 submit-btn" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    <div className='mt-2 d-flex justify-content-between'>
                                        <p className='mx-3'>Create a New <Link to='/signup' className='text-decoration-none text-blue-color'>account</Link></p>
                                        <p className='mx-3'><Link to='' className='text-decoration-none text-blue-color'>Forget Password</Link></p>
                                    </div>
                                    <Button onClick={() => signInWithGoogle()} className="mx-3 submit-btn" variant="outline-primary"><img src={google} />Google</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;