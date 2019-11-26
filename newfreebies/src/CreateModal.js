import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class CreateModal extends Component {

    constructor(props) {
        super(props);
        this.state = { createModalShow: false, showTime: true }

        this.createOpenModal = this.createOpenModal.bind(this);
        this.createClose = this.createClose.bind(this);
    }


    createOpenModal = () => {
        this.setState({ createModalShow: true })
    }

    createClose = () => this.setState({ createModalShow: false });

    onClickDefinite = () => {
        this.setState({ showTime: !this.state.showTime })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.createModalShow} onHide={this.createClose} backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <p><span className="modal-label">Title: </span><input type="text" name="inputTitle" /></p>
                            <p><span className="modal-label">Location: </span><input type="text" name="inputLocation" /></p>
                            <div>
                                <input type="radio" value="definite" name="post-choice" defaultChecked onClick={this.onClickDefinite} /> Definite
                                <input type="radio" value="indefinite" name="post-choice" onClick={this.onClickDefinite} /> Indefinite
                                {this.state.showTime ?
                                    <div>
                                        <p><span className="modal-label">Date: </span><input type="text" name="inputDate" /></p>
                                        <p>
                                            <span className="modal-label">Time: </span>
                                            <span className="modal-label">Start: </span>
                                            <input type="text" name="input-time-start" />
                                            <span className="modal-label">End: </span>
                                            <input type="text" name="input-time-end" />
                                        </p>
                                    </div> : null
                                }
                            </div>

                            <p><span className="modal-label">Description: </span><input type="text" name="inputDescription" /></p>
                        </div>
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