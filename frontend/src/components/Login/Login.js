import React from 'react';
import GoogleLogin from '../../containers/GoogleLogin/GoogleLogin';
import EmailLogin from '../../containers/EmailLogin/EmailLogin';
import './Login.css';
function Login() {
    return (
        <React.Fragment>
            <div className="container">
                <GoogleLogin />
                <EmailLogin />
            </div>
        </React.Fragment>
    );
}

export default Login;