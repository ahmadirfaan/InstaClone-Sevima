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
        const thisContext = this;
        fetch("http://localhost:8081/comments/"+this.props.id)
            .then(response => response.json())
            .then(data => {
                thisContext.setState({ commentList: data })
            })
    }

    submitComments = (event) => {
        if (event.key == "Enter") {
            let comment = event.currentTarget.value
            if (comment != null || comment != undefined) {
                let payload = {
                    "commendId": Math.floor(Math.random() * 100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timestamp": new Date().getTime(),
                    "comment": comment
                }

                const requestOptions = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }

                fetch("http://localhost:8081/comments", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        this.getComments();
                    })
                    .catch(error => {

                    })
            }
        }
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
                            index < 4 ? 
                            <div className="post_comment">{item.userName} : {item.comment}</div> :
                            <span></span>
                        ))
                    }
                    <input text="text" onKeyPress={this.submitComments} className="post_commentbox" placeholder="Add a comment..." />
                </div>
            </div>
        );
    }
}

export default Post;
