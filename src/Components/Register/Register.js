import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import RequireAuth from '../RequireAuth/RequireAuth';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);


const Register = () => {
    // const auth = getAuth(app);
    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    // if (user) {
    //     navigate('/home')
    // }
    const [error, setError] = useState([]);


    const register = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;


            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }

            )
    }

    return (
        <div className='register-container'>

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
            <br></br>
            <p className='text-danger'><small> {error}</small>
            </p>
            <p className='mt-4'> Already have an account ? <br></br>
                <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            </p>

        </div>
    );
};

export default Register;