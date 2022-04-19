import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const register = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    }
    return (
        <div>
            <h2>This is register</h2>
            <h2>This is register</h2>
            <h3>Please Register</h3>

            <form onSubmit={register}>
                <input type='text' name='name' placeholder='Your Name' required></input>
                <br></br>
                <br></br>
                <input type='text' name='email' placeholder='Your Email' required></input>
                <br></br>
                <br></br>
                <input type='password' name='password' placeholder='Password' required></input>
                <br></br>
                <br></br>
                <input type='submit' value='Register'></input>
            </form>
            <p className='mt-4'> Already have an account ? <br></br>
                <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;