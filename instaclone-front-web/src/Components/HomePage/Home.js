import React, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
}
