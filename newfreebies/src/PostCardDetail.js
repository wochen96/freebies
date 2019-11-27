import React, { Component } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import PostView from './PostView';
import icon from './uw_icon.png'

class PostCardDetail extends Component {
    constructor(props) {
        super(props);
    }

    modalPostCheck = ({ openPostModal }) => {
        console.log("openPostModal is ");
        this.showPostModal = openPostModal;

    }

    onPostClick = () => {
        console.log("onPostClick are called");
        this.showPostModal();
    }

    render() {
        return (
            <div>
                <PostView ref={this.modalPostCheck} onePost={this.props.onePost}></PostView>

                <Card>
                    <Card.Img variant="top" src={icon} />
                    <Card.Body>
                        <Card.Title style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>{this.props.onePost.data.title}</Card.Title>
                        <Card.Text style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            {this.props.onePost.data.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.onPostClick}>Click</Button>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}

export default PostCardDetail;