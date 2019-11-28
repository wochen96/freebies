import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class PostModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        /*return(
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
        );*/


        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header className="modal-header" closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.props.onePost.data.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <p><span className="modal-label">Type: </span><span>{this.props.onePost.data.isDefinite}</span></p>
                            <p><span className="modal-label">Location: </span><span>{this.props.onePost.data.location}</span></p>

                            {
                                this.props.onePost.data.isDefinite == 'definite' ?
                                    <div>
                                        <p><span className="modal-label">Event Date and Time:</span></p>
                                        <p><span className="modal-label">Start date and time: </span><span>{this.props.onePost.data.startDate.toDate().toString()}</span></p>
                                        <p><span className="modal-label">End date and time: </span><span>{this.props.onePost.data.endDate.toDate().toString()}</span></p>
                                    </div> : null
                            }

                            <p><span className="modal-label">Description: </span><span>{this.props.onePost.data.description}</span></p>
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