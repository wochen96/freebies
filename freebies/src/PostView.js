import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component, ProTypes } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Modal2 from './Modal'
import { thisExpression } from '@babel/types';

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


export default class PostView extends React.Component {

  constructor() {
    super();
 
    this.state = {
      modalIsOpen: true
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
  }

  render() {
    /*if (!this.props.state) {
      return (<div className="test">state</div>)
    }*/
    if (!this.props.show) {
      console.log("show")
      return (<div className="test">show</div>)
    }

    console.log("before modal")

    return <div>
      <Modal
          //isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          //style={customStyles}
          //contentLabel="Example Modal"
          >

          <h2 ref={subtitle => this.subtitle = subtitle}>Free Cokies for All</h2>
          <button onClick={thisExpression.closeModal}>close</button>
          <div>
              <p>Location: Mary Gate hall</p>
              <p>Date: Nov, 15 2019</p>
              <p>Time: Start: 10am, End: 11am</p>
              <p>Free cookies for All!!! Go get some!!!</p>
          </div>
          <form>
              <button>Edit</button>
              <button>Delete</button>
          </form>
      </Modal>
    </div>
  }
}