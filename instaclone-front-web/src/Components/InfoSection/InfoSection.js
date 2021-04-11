import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './InfoSection.css';
import imageSrc from "../../images/pp1.png";

export default class InfoSection extends Component {
    render() {
        return (
            <div>
                <div className="info_container">
                    <Avatar src={imageSrc} className="info_image" />
                    <div className="info_content">
                        <div className="info_username">irfaanhibatullah</div>
                        <div className="info_description" >Description</div>
                    </div>
                </div>
            </div>
        )
    }
}
