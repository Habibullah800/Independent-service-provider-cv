import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='photo'>
            <img src={img} alt="pic" />
            <h3>{name}</h3>
            {price}
            {description}
        </div>
    );
};

export default Service;