import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import './Post.css';
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments()
    }

    getComments = () => { //Contoh Dummy Data sebelum back-end
        let data = [
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment 1"
            },
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment 2"
            },
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Comment 3"
            }
        ];
        this.setState({ commentList: data });
    }
    render() {
        return (
            <div className="post_container">
                {/* Merepresentasikan Header(Tampilan profil,dkk) */}
                <div className="post_header">
                    <Avatar className="post_image" src="" />
                    <div className="post_username" >{this.props.userName}</div>
                </div>

                {/* Merepresentasikan Gambar yang dipos */}
                <div>
                    <img src={this.props.postImage} width="615px" />
                </div>

                {/* Merepresentasikan jumlah like, data analitik */}
                <div>
                    <div style={{ marginLeft: "10px" }}>
                        <img src={love} className="post_reactimage"></img>
                        <img src={comment} className="post_reactimage"></img>
                        <img src={share} className="post_reactimage"></img>
                    </div>
                    <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
                        {this.props.likes} likes
                    </div>
                </div>
                {/* Merepresentasikan komen,dll */}
                <div>
                    {
                        this.state.commentList.map((item, index) => (
                            <div className="post_comment">{item.username} : {item.description}</div>
                        ))
                    }
                    <input text="text" className="post_commentbox" placeholder="Add a comment..." />
                </div>
            </div>
        );
    }
}

export default Post;
