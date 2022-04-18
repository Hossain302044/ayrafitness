import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const cityRef = useRef('');
    const stateRef = useRef('');
    const zipRef = useRef('');
    const { checkoutId } = useParams();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const zip = zipRef.current.value;
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (firstName && lastName && city && state && zip) {
            toast('Thanks for Your Order!!!');
        }

        setValidated(true);
    };
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col md={7}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        ref={firstNameRef}
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        ref={lastNameRef}
                                        required
                                        type="text"
                                        placeholder="Last name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" ref={cityRef} placeholder="City" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" ref={stateRef} placeholder="State" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" ref={zipRef} placeholder="Zip" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Discriptions</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Col>
                    <Col md={5}>
                        <div className='d-flex justify-content-center'>
                            <h2>Service id:{checkoutId}</h2>
                        </div>
                    </Col>
                    <ToastContainer />
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;