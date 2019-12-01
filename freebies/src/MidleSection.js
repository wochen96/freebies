import React, { Component, ProTypes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PostView from './PostView'
import icon from "./uw_icon.png";
//import "../src/uw_icon.png";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};




// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

Modal.setAppElement('#root')

class MidleSection extends Component {

    /* constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      } */

      getModal() {
          new PostView();
      }

    generateCards = () => {
        //this.props.content;
        // total / 4


        var result = [];
        for (var i = 0; i < 10; i++) {
            result.push(
                <CardColumns>
                    
                <Card style={{}}>
                <Card.Img variant="top" src={icon} />
                <Card.Body>
                    <Card.Title style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>Free Cookie for All</Card.Title>
                    <Card.Text style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        Free cokies
                                </Card.Text>
                    <Button variant="primary">Click</Button>
                </Card.Body>
                    </Card>

                    <Card style={{}}>
                        <Card.Img variant="top" src={icon} />
                        <Card.Body>
                            <Card.Title style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Free Cookie for All</Card.Title>
                            <Card.Text style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                Free cokies
                                </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{}}>
                        <Card.Img variant="top" src={icon} />
                        <Card.Body>
                            <Card.Title style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Free Cookie for All</Card.Title>
                            <Card.Text style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                Free cokies
                                </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{}}>
                        <Card.Img variant="top" src={icon} />
                        <Card.Body>
                            <Card.Title style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>Free Cookie for All</Card.Title>
                            <Card.Text style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                Free cokies
                                </Card.Text>
                            <Button variant="primary">Click</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>);
        }
        return result;
    }

    render() {
        return(
            <div>

                {this.generateCards()}


            </div>
        );

    }
 }

export default MidleSection;