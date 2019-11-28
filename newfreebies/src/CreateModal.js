import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db, auth } from './services/firebase';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class CreateModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createModalShow: false,
            selectedOption: 'definite',
            title: null,
            description: null,
            downvotes: null,
            isDefinite: null,
            location: null,
            picture: null,
            tag: null,
            upvotes: null,
            username: null,
            startDate: null,
            endDate: null
        }

        this.createOpenModal = this.createOpenModal.bind(this);
        this.createClose = this.createClose.bind(this);
    }


    createOpenModal = () => {
        this.setState({ createModalShow: true })
    }

    createClose = () => this.setState({ createModalShow: false, startDate: null, endDate: null });

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }

    addNewPost = (event) => {

        this.setState(function () {
            return {
                title: document.getElementById('inputTitle').value,
                location: document.getElementById('inputLocation').value,
                description: document.getElementById('inputDescription').value,
                isDefinite: this.state.selectedOption,
                picture: 'http:/url-to-image.png',
                tag: document.getElementById('inputTag').value,
                username: 'tran6388@uw.edu',
            }
            
        }, function () {
            db.collection('posts')
                .add({
                    title: this.state.title,
                    location: this.state.location,
                    description: this.state.description,
                    downvotes: '0',
                    endDate: this.state.endDate,
                    isDefinite: this.state.isDefinite,
                    picture: 'http:/url-to-image.png',
                    startDate: this.state.startDate,
                    tag: this.state.tag,
                    upvotes: '0',
                    //createAt: new Date('December 17, 1995 03:24:00'),
                    createAt: new Date(),
                    username: 'tran6388@uw.edu'
                })
                .then(res => {
                    console.log(res.id)
                })
            this.createClose();
        });
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
                                <input type="radio" value="definite" id="inputDefinite" checked={this.state.selectedOption === 'definite'} onChange={this.handleOptionChange} /> Definite
                                <input type="radio" value="indefinite" id="inputIndefinite" checked={this.state.selectedOption === 'indefinite'} onChange={this.handleOptionChange} /> Indefinite
                                {this.state.selectedOption === "definite" ?
                                    <div>
                                        {/* <p><span className="modal-label">Date: </span><input type="text" id="inputDate" /></p> */}
                                        <p><span className="modal-label">Event time: </span></p>

                                        <p>
                                            <span className="modal-label">Start Time: </span>

                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={date => this.setState({ startDate: date })}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                id="inputStartDate"
                                            />
                                        </p>

                                        <p>
                                            <span className="modal-label">End Time: </span>
                                            <DatePicker
                                                selected={this.state.endDate}
                                                onChange={date => this.setState({ endDate: date })}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                id="inputEndDate"
                                            />
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