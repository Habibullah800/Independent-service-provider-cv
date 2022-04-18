import React, { useState } from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Image/skin-min (1).jpg'
import pic2 from '../../../Image/Allergy (1).jpg'
import pic3 from '../../../Image/Anti Aging-min (1).jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='banner'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={pic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>Practice Patient Education</h4>
                        <p><small>I can help educate your patients on uninsured medical services</small></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>Communication and Billing</h4>
                        <p>I take care of communicating with your patients and manage medical services.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4>Full-Service
                            Administration</h4>
                        <p>
                            My platform is customizable to meet the specific needs of your practice.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;