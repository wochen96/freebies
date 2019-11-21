import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


class PostView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Free Cokies for All
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <p>Location: Mary Gate hall</p>
                    <p>Date: Nov, 15 2019</p>
                    <p>Time: Start: 10am, End: 11am</p>
                    <p>Free cookies for All!!! Go get some!!!</p>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Edit</Button>
                <Button variant="danger" onClick={this.props.onHide}>Delete</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}

export default PostView;