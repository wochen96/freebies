import React, { Component } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';
import PostView from './PostView';

class PostCardDetail extends Component {
    constructor(props) {
        super(props);

        this.refPostView = React.createRef();
    }    

    onPostClick = () => {
        const currentPostView = this.refPostView.current;

        if (currentPostView.state.showPostModal == false) {
            currentPostView.openPostModal();
            //console.log("onPostClick are called and show PostView");
        }
    }

    render() {
        return (
            <div>
                <PostView ref={this.refPostView} onePost={this.props.onePost} userEmail={this.props.userEmail}></PostView>

                <Card onClick={this.onPostClick}>
                    <Card.Img variant="top" src={this.props.onePost.data.url} height="200" width="100" />
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
                        {/* <Button variant="primary" onClick={this.onPostClick}>Click</Button> */}
                    </Card.Body>
                </Card>
            </div>
        );

    }
}

export default PostCardDetail;