import React from 'react';
import useFirebase from '../../Hooks/UseFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
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
            <form>
                <input type='text' placeholder='Your Email'></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='Password'></input>
                <br></br>
                <br></br>
                <input type='submit' value='Login' ></input>
            </form>
        </div>
    );
};

export default Login;