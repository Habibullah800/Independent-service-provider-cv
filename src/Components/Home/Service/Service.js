import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../404/NotFound';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, description, img } = service;

    return (
        <div className='service'>
            <img src={img} alt="pic" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <Link className='btn btn-primary' to='/login'> Take this Treatment</Link>

        </div>
    );
};

export default Service;