import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PostModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.onePost.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <p><span className="modal-label">Location: </span><span>{this.props.onePost.location}</span></p>
                            <p><span className="modal-label">Date: </span><span>{this.props.onePost.startTime}</span></p>
                            <p><span className="modal-label">Time: </span><span>{this.props.onePost.endTime}</span></p>
                            <p><span className="modal-label">Description: </span><span>{this.props.onePost.description}</span></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.openEditModal}>Edit</Button>
                        <Button variant="danger" onClick={this.props.openDeleteModal}>Delete</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
 }

export default PostModal;