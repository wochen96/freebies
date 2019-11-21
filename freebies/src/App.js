import React, { Component } from 'react';

// components
//import Header from './header';
//import Footer from './footer';
import Dashboard from './Dashboard';
//import Dashboard from './Dashboard2';


//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Button, Navbar, Nav, Form, FormControl, ButtonToolbar } from 'react-bootstrap'
//import Modal from 'react-modal';

import ReactDOM from "react-dom";
//import App from "./App";
//import "./modal.css";

//import LoginModal from './LoginModal';
import { Navbar, NavItem, Nav, Button, ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AddDepModal} from './AddDepModal'

/* import { 
  Popover,
  Tooltip,
  Modal
} from 'react-bootstrap'; */

/*function App() {
    return(

      <div className="App">
       <Dashboard />
      </div>
    );

}

export default App;*/


/*import Modal from "./Modal";



class App extends Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  loginModalRef = ({showModal}) => {
    this.showModal = showModal;
  }
 
  onLoginClick = () => {
   this.showModal();
  }



  render() {
    return (
      <div className="App">
        <button  onClick={e => {
              this.showModal();
         }}
          > show Modal </button>

        <Modal show={this.loginModalRef} />

        <button
          className="toggle-button"
          id="centered-toggle-button"
          onClick={this.onLoginClick}
          >Show Modal</button>

        <Modal show={this.state.show}>Message in Modal</Modal>

        <button
            onClick={e => {
              this.onClose(e);
            }}>
            Close
          </button>
      </div>
    );
  }
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/



/*class App extends Component {

  loginModalRef = ({handleShow}) => {
    this.showModal = handleShow;
  }
 
  onLoginClick = () => {
    console.log("into onLoginclick")
   this.showModal();
  }

  constructor(props, context){
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
        show: true
    }
  }
  handleShow() {
      this.state.show = true;
  }
  handleClose(){
      this.setState({ show: false })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>Show</Button>

        <LoginModal ref={this.loginModalRef}></LoginModal>
        console.log("into modal return")

          <Modal show={true} onHide={this.handleClose}>
          console.log("inside modal")
             <Modal.Header closeButton>
               <Modal.Title>Modal Heading</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <h1>This is modal body</h1>
             </Modal.Body>
          </Modal>

          <Modal show={true}><p>something need here</p></Modal>
      </div>
    );
  }
}

export default App;*/

/*class App extends Component {

  constructor(props) {
    super(props);
    this.state = {addModalShow: false}

    this.openModal = this.openModal.bind(this);
    this.addModalClose = this.addModalClose.bind(this);
  }


  openModal = () => {
    console.log("into openModal")
    console.log(this.state.addModalShow)
    this.setState({addModalShow: true})
    console.log(this.state.addModalShow)
  }
  addModalClose = () => this.setState({addModalShow: false});

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button
          variant='primary'
          onClick={this.openModal}
          >Add Department</Button>

          <AddDepModal 
          show={this.state.addModalShow}
          onHide={this.addModalClose}/>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;*/

