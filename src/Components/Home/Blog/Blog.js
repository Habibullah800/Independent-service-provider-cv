import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h5>Ques-1: Difference between Authorization and Authentication?</h5>
            <h6>Ans: authentication is the process of verifying who someone is, where as authorization is the process of verifying what specific applications, files, and data a user has access to. Authentication is done before the authorization process. The process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization.</h6>


            <h5>Ques-2: Why are you using Firebase? What other option do you have implement authentication?</h5>
            <h6>Ans: For this reason we are using firebase: Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic <small>Other option are: MongoDB, Auth0, Okta,Amazon Cognito, JSON Web Token etc </small></h6>


            <h5>Ques-3: What other service does firebase provide other then Authentication?</h5>
            <h6>Ans: There are many services which Firebase provides, Most useful of them are:<br></br>
                <br></br>
                1. Cloud Functions <br></br>
                2.  Authentication<br></br>
                3.  Hosting<br></br>
                4.  Cloud Storage<br></br>
                5.  Google Analytics<br></br>
                6.  Predictions<br></br>
                7.  Cloud Messaging<br></br>
                8.  Dynamic Links<br></br>
                9.  Remote Config<br></br>
                10. Cloud Firestore
                <br></br>

            </h6>
        </div>
    );
};

export default Blog;