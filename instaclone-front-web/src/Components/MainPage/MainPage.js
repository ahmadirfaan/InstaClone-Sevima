import React, { Component } from 'react';
import Post from '../Post/Post';
import './MainPage.css';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost()
    }

    getPost = () => { //Untuk API Dummy
        let data = [
            {
                "postId": "123456",
                "userName": "andhika_harris",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timestamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "andhika_harris",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timestamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "andhika_harris",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timestamp": "12345",
                "likes": "1234"
            },
            {
                "postId": "123456",
                "userName": "andhika_harris",
                "postImageURL": "https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                "timestamp": "12345",
                "likes": "1234"
            }
        ];
        this.setState({ postArray: data })

    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (
                        <Post id={item.postId} userName={item.userName} 
                        postImage={item.postImageURL}
                        likes={item.likes}
                        />

                    ))

                }
            </div>
        )
    }
}
