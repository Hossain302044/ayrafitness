import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Notfound.css'

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className='notFount'>
                        <h2>404!</h2>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;