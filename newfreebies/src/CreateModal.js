import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class CreateModal extends Component {

    constructor(props) {
        super(props);
        this.state = {createModalShow: false}
    
        this.createOpenModal = this.createOpenModal.bind(this);
        this.createClose = this.createClose.bind(this);
      }
    
    
    createOpenModal = () => {
    this.setState({createModalShow: true})
    }

    createClose = () => this.setState({createModalShow: false});

    render() {
        return(
            <div>
                <Modal show={this.state.createModalShow} onHide={this.createClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Body
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.createClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" onClick={this.createClose}>
                        SUMMIT
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
 }

export default CreateModal;