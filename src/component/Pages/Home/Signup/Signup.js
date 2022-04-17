import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import google from './../../../../img/icon/google.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user1, emailPassError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your Password did not Match');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    if (user1 || user) {
        navigate('/home');
    }
    return (
        <>
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
                                    <h2 className='mt-2'>Please Signup</h2>
                                </div>
                                <Form onSubmit={handleCreateUser}>
                                    <Form.Group className="m-3" controlId="formBasicName">
                                        <Form.Control onClick={handleNameBlur} className='input-feild' type="text" placeholder="Enter name" required />
                                    </Form.Group>
                                    <Form.Group className="m-3" controlId="formBasicEmail">
                                        <Form.Control onBlur={handleEmailBlur} className='input-feild' type="email" placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="m-3" controlId="formBasicPassword">
                                        <Form.Control onBlur={handlePasswordBlur} className='input-feild' type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Form.Group className="m-3" controlId="formBasicConfirmPassword">
                                        <Form.Control onBlur={handleConfirmPasswordBlur} className='input-feild' type="password" placeholder="Confirm Password" required />
                                    </Form.Group>
                                    <p className="m-3" style={{ color: "red" }}>{error}{googleError?.message}{emailPassError?.message}{updateError?.massage}</p>
                                    <Button className="mx-3 submit-btn" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                                <div className='mt-2 d-flex justify-content-between'>
                                    <p className='mx-3 text-center'>already you have a <Link to='/login' className='text-decoration-none text-blue-color'>account</Link></p>
                                </div>
                                <Button onClick={() => signInWithGoogle()} className="mx-3 submit-btn" variant="outline-primary"><img src={google} />Google</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </>
    );
};

export default Signup;