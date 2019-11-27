import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db, auth } from './services/firebase';


class CreateModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createModalShow: false,
            selectedOption: 'definite',
            title: null,
            date: null,
            description: null,
            downvotes: null,
            endTime: null,
            isDefinite: null,
            location: null,
            picture: null,
            startTime: null,
            tag: null,
            upvotes: null,
            username: null
        }

        this.createOpenModal = this.createOpenModal.bind(this);
        this.createClose = this.createClose.bind(this);
    }


    createOpenModal = () => {
        this.setState({ createModalShow: true })
    }

    createClose = () => this.setState({ createModalShow: false });

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    addNewPost = (event) => {

        this.setState(function () {
            if (this.state.selectedOption === 'indefinite') {
                return {
                    title: document.getElementById('inputTitle').value,
                    location: document.getElementById('inputLocation').value,
                    description: document.getElementById('inputDescription').value,
                    isDefinite: this.state.selectedOption,
                    picture: 'http:/url-to-image.png',
                    tag: document.getElementById('inputTag').value,
                    username: 'tran6388@uw.edu',
                }
            } else {
                return {
                    title: document.getElementById('inputTitle').value,
                    location: document.getElementById('inputLocation').value,
                    description: document.getElementById('inputDescription').value,
                    isDefinite: this.state.selectedOption,
                    picture: 'http:/url-to-image.png',
                    tag: document.getElementById('inputTag').value,
                    username: 'tran6388@uw.edu',
                    date: document.getElementById('inputDate').value,
                    endTime: document.getElementById('inputEndTime').value,
                    startTime: document.getElementById('inputStartTime').value
                }
            }
        }, function () {
            db.collection('posts')
                .add({
                    title: this.state.title,
                    location: this.state.location,
                    date: this.state.date,
                    description: this.state.description,
                    downvotes: '0',
                    endTime: this.state.endTime,
                    isDefinite: this.state.isDefinite,
                    picture: 'http:/url-to-image.png',
                    startTime: this.state.startTime,
                    tag: this.state.tag,
                    upvotes: '0',
                    username: 'tran6388@uw.edu'
                })
                .then(res => {
                    console.log(res.id)
                })
        });

        this.createClose();
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
                            <p><span className="modal-label">Title: </span><input type="text" id="inputTitle" /></p>
                            <p><span className="modal-label">Location: </span><input type="text" id="inputLocation" /></p>
                            <div>
                                <input type="radio" value="definite" id="inputDefinite" defaultChecked checked={this.state.selectedOption === 'definite'} onChange={this.handleOptionChange} /> Definite
                                <input type="radio" value="indefinite" id="inputIndefinite" checked={this.state.selectedOption === 'indefinite'} onChange={this.handleOptionChange} /> Indefinite
                                {this.state.selectedOption === "definite" ?
                                    <div>
                                        <p><span className="modal-label">Date: </span><input type="text" id="inputDate" /></p>
                                        <p>
                                            <span className="modal-label">Time: </span>
                                            <span className="modal-label">Start: </span>
                                            <input type="text" id="inputStartTime" />
                                            <span className="modal-label">End: </span>
                                            <input type="text" id="inputEndTime" />
                                        </p>
                                    </div> : null
                                }
                            </div>

                            <p><span className="modal-label">Description: </span><input type="text" id="inputDescription" /></p>
                            <p><span className="modal-label">Tag: </span><input type="text" id="inputTag" /></p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.createClose}>
                            CANCEL
                            </Button>
                        <Button variant="primary" onClick={this.addNewPost}>
                            SUMMIT
                            </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );

    }
}

export default CreateModal;