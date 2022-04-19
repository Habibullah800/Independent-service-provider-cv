import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/UseFirebase';
import NotFound from '../404/NotFound';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import './Service.css'
const Service = ({ service }) => {
    const { name, price, description, img } = service;
    const { user, handleSignOut } = useFirebase()

    return (
        <div className='service'>
            <img src={img} alt="pic" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>

            {
                user?.uid
                    ?
                    <div >
                        <Link className='btn btn-primary' to='/placeOrder'> Take this Treatment</Link>
                    </div>
                    :
                    <Link className='btn btn-primary' to='/login'> Take this Treatment</Link>
            }



        </div>
    );
};

export default Service;