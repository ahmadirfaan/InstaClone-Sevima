import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './StatusBar.css';
import statusimg from "../../images/pp1.png";
import uploadimage from "../../images/statusadd.png";

export default class StatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "irfaanhibatullah",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "ahmadirfaan",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "tutiwulandari",
                "imageURL": "../../images/pp1.png"
            },
            {
                "username": "atmimnurrona",
                "imageURL": "../../images/pp1.png"
            }
        ]
        this.setState({ statusList: data });
    }

    render() {
        return (
            <div className="statusbar_container">
                <img src={uploadimage} className="statubar_upload" width="55px" height="55px" />
                {
                    this.state.statusList.map((item, index) => (
                        <div className="status">
                            <Avatar className="statusbar_status" src={statusimg} />
                            <div className="statusbar_text">{item.username}</div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
