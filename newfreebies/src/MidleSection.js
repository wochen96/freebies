import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap';
import PostView from './PostView';


class MidleSection extends Component {

    constructor(props) {
        super(props);
        /*this.state = {postModalShow: false}
    
        this.postOpenModal = this.postOpenModal.bind(this);
        this.postClose = this.postClose.bind(this);*/
      }
    
    
    /*postOpenModal = () => {
    this.setState({postModalShow: true})
    }

    postClose = () => this.setState({postModalShow: false});*/

    modalPostCheck = ({openPostModal}) => {
        this.showPostModal = openPostModal;
    }
     
    onPostClick = () => {
        this.showPostModal();
    }

    render() {
        return(
            <div>
                <CardColumns>
                    <PostView ref={this.modalPostCheck}></PostView>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary" onClick={this.onPostClick}>Click</Button>
                        </Card.Body>
                    </Card>

<                   Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary" onClick={this.onPostClick}>Click</Button>
                        </Card.Body>
                    </Card>

                    
                    
                </CardColumns>


            </div>
        );

    }
 }

export default MidleSection;