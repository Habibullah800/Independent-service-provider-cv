import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../Hooks/UseFirebase';
import './Login.css'
const auth = getAuth(app);
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const { user, handleSignOut } = useFirebase()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
        // Email and password
        console.log(email, password);

    }



    const { signInWithGoogle } = useFirebase();



    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className='login-container'>
            <h3>Please Login</h3>


            {
                user?.uid
                    ?
                    <div className='mb-4' >
                        <Link className='btn btn-primary' to='/placeOrder'> Take our Treatment</Link>
                    </div>
                    :
                    <div>
                        <button className='btn btn-primary' onClick={signInWithGoogle}> Sign-in with Google</button>
                        <br></br>
                        <br></br>
                    </div>
            }

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <input ref={emailRef} type='text' placeholder='Your Email' required></input>
                    <br></br>
                    <br></br>
                </Form.Group>


                <Form.Group>
                    <input ref={passwordRef} type='password' placeholder='Password' required></input>
                    <br></br>
                </Form.Group>
                <br></br>



                <input type='submit' value='Login' ></input>

            </Form>

            <p className='mt-4'> New to our Telemedicine Service ? <br></br>
                <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link>
            </p>
        </div>
    );
};

export default Login;