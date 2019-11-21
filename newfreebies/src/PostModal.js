import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PostModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {/* <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        EDIT POST
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Body
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>CANCEL</Button>
                        <Button variant="danger" onClick={this.props.onHide}>SUMMIT</Button>
                    </Modal.Footer>
                    </Modal> */}

                    <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Free Cokies for All
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <p><span className="modal-label">Location: </span><span>Mary Gate hall</span></p>
                            <p><span className="modal-label">Date: </span><span>Nov, 15 2019</span></p>
                            <p><span className="modal-label">Time: </span><span>Start: 10am, End: 11am</span></p>
                            <p><span className="modal-label">Description: </span><span>Free cookies for All!!! Go get some!!!</span></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.showEditModalClick}>Edit</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Delete</Button>
                    </Modal.Footer>
                    </Modal>
            </div>
        );

    }
 }

export default PostModal;