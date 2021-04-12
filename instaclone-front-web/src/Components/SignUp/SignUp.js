import React, { Component } from 'react';
import './SignUp.css';
import { storage, auth } from '../firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            name: null,
            userName: null,
            password: null
        }
    }

    newSignUp = () => {
        auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                let payload = {
                    "userId": user.uid,
                    "userName": this.state.userName,
                    "name": this.state.name,
                    "profileImage": ""
                }

                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }

                fetch("http://localhost:8081/users", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("users", JSON.stringify(user));
                        window.location.reload()
                    })
                    .catch(error => {

                    })

                // console.log(this.state.emailId)
                // console.log(this.state.password)
                // console.log(user)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

    render() {
        return (
            <div>
                <input className="loginpage_text" onChange={(e) => { this.state.emailId = e.currentTarget.value }} type="text" placeholder="Mobile number or email" />
                <input className="loginpage_text" onChange={(e) => { this.state.name = e.currentTarget.value }} type="text" placeholder="Full name" />
                <input className="loginpage_text" onChange={(e) => { this.state.userName = e.currentTarget.value }} type="text" placeholder="Username" />
                <input className="loginpage_text" onChange={(e) => { this.state.password = e.currentTarget.value }} type="password" placeholder="Password" />
                <button className="login_button" onClick={this.newSignUp} >Sign Up</button>
            </div>
        );
    }
}

export default SignUp;
