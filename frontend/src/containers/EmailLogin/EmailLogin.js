import React from 'react';
import './EmailLogin.css';
function EmailLogin() {
    return (
        <React.Fragment>
            <div className="out-container">
                <h5>Login To Your Account</h5>
                <form className="d-flex flex-column justify-content-center">
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="TTN Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check d-flex justify-content-between text">
                        <div>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <a href="/">Forgot Password?</a>

                    </div>
                </form>
                <a href="/" type="submit" id="btn-signIn">Sign In</a>
            </div>
        </React.Fragment>
    );
}

export default EmailLogin;