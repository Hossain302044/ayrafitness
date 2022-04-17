import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = props => {
    const { id, title, picture, Discriptions } = props.serviceDetails;
    const navigate = useNavigate();
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='fw-bold text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>
                        {Discriptions.slice(0, 130)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => navigateToServiceDetails(id)} className="mx-1 submit-btn" variant="primary">
                        More Details <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default ServiceDetail;