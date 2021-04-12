import React, { Component } from 'react';
import '../LoginPage/LoginPage.css';
import { storage, auth } from '../firebase';

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        }
    }

    login = () => {
        // localStorage.setItem("users", "admin")
        // window.location.reload();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
                // ...
                // console.log(this.state.emailId)
                // console.log(this.state.password)
                // console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)

            });
    }

    render() {
        return (
            <div>
                <input className="loginpage_text" onChange={(e) => { this.state.emailId = e.currentTarget.value }} type="text" placeholder="Phone number,username, or email" />
                <input className="loginpage_text" onChange={(e) => { this.state.password = e.currentTarget.value }} type="password" placeholder="Password" />
                <button className="login_button" onClick={this.login} >Log In</button>
            </div>
        )
    }
}
