import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


class EditModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Modal
                    {...this.props}
                    backdrop="static"
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
                        <div className="modal-body">
                            <p><span className="modal-label">Location: </span><input type="text" name="inputLocation" /></p>
                            <p><span className="modal-label">Date: </span><input type="text" name="inputDate" /></p>
                            <p><span className="modal-label">Time: </span><input type="text" name="inputTime" /></p>
                            <p><span className="modal-label">Description: </span><input type="text" name="inputDescription" /></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>CANCEL</Button>
                        <Button variant="danger" onClick={this.props.onHide}>SUMMIT</Button>
                    </Modal.Footer>
                </Modal>

                    
            </div>
        );

    }
 }

export default EditModal;