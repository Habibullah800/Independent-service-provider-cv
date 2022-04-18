import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='title'>
            <h2 className='text-primary'>Special Telemedicine Service Dr. on Demand</h2>
            <hr></hr>
            <h3>Our treatment</h3>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;