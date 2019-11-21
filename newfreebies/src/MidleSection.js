import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap';
import PostView from './PostView';


class MidleSection extends Component {

    constructor(props) {
        super(props);
        this.state = {addModalShow: false}
    
        this.openModal = this.openModal.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
      }
    
    
    openModal = () => {
    this.setState({addModalShow: true})
    }

    addModalClose = () => this.setState({addModalShow: false});

    render() {
        console.log(this.state.modalIsOpen)
        return(
            <div id="root2">
                <CardColumns>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="./uw_icon.png" />
                        <Card.Body>
                            <Card.Title>Free Cookie for All</Card.Title>
                            <Card.Text>
                            Free cokies
                            </Card.Text>
                            <Button variant="primary" onClick={this.openModal}>Click</Button>
                        </Card.Body>
                    </Card>

                    <PostView 
                    show={this.state.addModalShow}
                    onHide={this.addModalClose}/>

                               

                    
                    
                </CardColumns>


            </div>
        );

    }
 }

export default MidleSection;