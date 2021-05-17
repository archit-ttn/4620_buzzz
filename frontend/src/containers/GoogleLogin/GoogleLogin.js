import React from 'react';
import './GoogleLogin.css';
// import { Link } from 'react-router-dom';
import image from '../../assets/images/logo.png';
function GoogleLogin() {
    return (
        <React.Fragment>
            <div className="card _card">
                <div className="text-center">
                    <img src={image} style={{ width: 30 + "%" }} class="" alt="..." />
                </div>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h4 className="card-title text-dark">Enter your details and Start your journey with us.</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Don't stop until you're proud.</h6>
                </div>
                <a href="http://localhost:8000/api/auth" id="btn-google">Sign In with Google</a>
            </div>
        </React.Fragment>
    );
}

export default GoogleLogin;