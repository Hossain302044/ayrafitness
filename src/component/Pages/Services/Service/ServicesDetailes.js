import React from 'react';
import { useParams } from "react-router-dom";

const ServicesDetailes = () => {
    const { serviceId } = useParams();
    return (
        <>
            <h2>This Is Details{serviceId}</h2>
        </>
    );
};

export default ServicesDetailes;