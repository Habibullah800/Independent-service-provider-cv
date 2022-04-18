import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [date, setDate] = useState();
    const getYear = () =>
        setDate(
            new Date().getFullYear()
        )

    useEffect(() => {
        getYear();
    }, [])

    return (
        <div className='footer'>
            <span className='title'>
                Copyright © TeleDoc {date}
            </span>
        </div>
    );
};

export default Footer;