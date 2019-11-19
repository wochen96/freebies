import React, { Component } from 'react';

// components
//import Header from './header';
//import Footer from './footer';
import DashboardBody from './Dashboard';
//import Dashboard from './Dashboard2';


//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar, Nav, Form, FormControl, ButtonToolbar } from 'react-bootstrap'
//import Modal from 'react-modal';

import ReactDOM from "react-dom";
//import App from "./App";

function App() {
    return(

      <div id="root" className="App">
        
        {/* <Header />

        <DashboardBody />

        <Footer /> */}

        <DashboardBody />

      </div>
    );

  }

export default App; 


//import Modal from "./Modal";


/* class App extends React.Component {

  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };



  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>

        <button  onClick={e => {
              this.showModal();
         }}
          > show Modal </button>

        <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal
        </Modal>

        <button
            onClose={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */




