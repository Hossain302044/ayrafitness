
import { CardGroup, Container } from 'react-bootstrap';
import useService from '../../../../hooks/useService';
import ServiceDetail from './ServiceDetail';

const Service = () => {
    const [services] = useService();
    return (
        <div>
            <Container className='mt-5'>
                <div className='d-flex justify-content-center mb-3'>
                    <h2>Our Services</h2>
                </div>
                <CardGroup>
                    {
                        services.map(serviceDetails => <ServiceDetail
                            key={serviceDetails.id}
                            serviceDetails={serviceDetails}
                        ></ServiceDetail>)
                    }
                </CardGroup>
            </Container>
        </div>
    );
};

export default Service;