import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component, ProTypes } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

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

state = {
    modalIsOpen: false
};

openModal() = e => {
    this.setState({modalIsOpen: true});
};
 
afterOpenModal = e => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
};
 
closeModal = e => {
    this.setState({modalIsOpen: false});
}

  /* state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  }; */

function PostShow() {
    return (
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">
                  
            <h2 ref={subtitle => this.subtitle = subtitle}>Free Cokies for All</h2>
            <button onClick={this.closeModal}>close</button>
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
    );
}

export default PostShow;