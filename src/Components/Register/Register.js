import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>This is register</h2>
            <h2>This is register</h2>
            <h3>Please Register</h3>

            <form>
                <input type='text' placeholder='Your Name'></input>
                <br></br>
                <br></br>
                <input type='text' placeholder='Your Email'></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='Password'></input>
                <br></br>
                <br></br>
                <input type='submit' value='Register'></input>
            </form>
        </div>
    );
};

export default Register;