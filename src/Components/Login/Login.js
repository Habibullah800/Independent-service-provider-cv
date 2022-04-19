import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

    }


    const { signInWithGoogle } = useFirebase();



    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div>
            <h4>This is login page</h4>
            <h4>This is login page</h4>


            <h3>Please Login</h3>
            <div>
                <button onClick={signInWithGoogle}>Google Signin</button>
                <br></br>
                <br></br>
            </div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type='text' placeholder='Your Email' required></input>
                <br></br>
                <br></br>
                <input ref={passwordRef} type='password' placeholder='Password' required></input>
                <br></br>
                <br></br>
                <input type='submit' value='Login' ></input>
            </form>
            <p className='mt-4'> New to our Telemedicine Service ? <br></br>
                <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link>
            </p>
        </div>
    );
};

export default Login;