import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Dr. On Demand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Link className='navText' to="/">Home</Link>
                            <Link className='navText' to="/blog">blog</Link>
                            <Link className='navText' to="/about">About</Link>

                        </Nav>
                        <Nav>
                            <Link
                                className='navText'
                                to='/login'> Login</Link>
                            <Link
                                className='navText'
                                to='/register'> Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;