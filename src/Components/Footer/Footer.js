import React, { useEffect, useState } from 'react';

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
        <div>
            <span>
                Copyright © TeleDoc {date}
            </span>
        </div>
    );
};

export default Footer;