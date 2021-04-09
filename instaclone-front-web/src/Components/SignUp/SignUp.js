import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginpage_text" type="text" placeholder="Mobile number or email" />
                <input className="loginpage_text" type="text" placeholder="Full name" />
                <input className="loginpage_text" type="text" placeholder="Username" />
                <input className="loginpage_text" type="password" placeholder="Password" />
                <button className="login_button">Sign Up</button>
            </div>
        );
    }
}

export default SignUp;
