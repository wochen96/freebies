import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db, auth } from './services/firebase';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class EditModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //createModalShow: false,
            //selectedOption: 'definite',
            title: this.props.onePost.data.title,
            description: this.props.onePost.data.description,
            //downvotes: props.onePost.data.downvotes,
            isDefinite: this.props.onePost.data.isDefinite,
            location: this.props.onePost.data.location,
            picture: this.props.onePost.data.picture,
            tag: this.props.onePost.data.tag,
            //upvotes: props.onePost.data.upvotes,
            //username: props.onePost.data.username,
            startDate: this.props.onePost.data.startDate.toDate(),
            endDate: this.props.onePost.data.endDate.toDate()
        }
    }

    editOnePost = (event) => {

        this.setState(function () {
            return {
                title: document.getElementById('inputEditTitle').value,
                location: document.getElementById('inputEditLocation').value,
                description: document.getElementById('inputEditDescription').value,
                picture: 'http:/url-to-image.png',
                tag: document.getElementById('inputEditTag').value
            }

        }, function () {
            db.collection('posts').doc(this.props.onePost.key)
                .update({
                    title: this.state.title,
                    location: this.state.location,
                    description: this.state.description,
                    picture: 'http:/url-to-image.png',
                    tag: this.state.tag,
                    //createAt: new Date('December 17, 1995 03:24:00'),
                    startDate: this.state.startDate,
                    endDate: this.state.endDate
                })
                .then(function () {
                    console.log("Document successfully updated!");
                })
                .catch(function (error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            this.props.onHide();
        });
    }

    render() {

        return (
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
                            <p><span className="modal-label">Title: </span><input type="text" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} id="inputEditTitle"></input></p>
                            <p><span className="modal-label">Location: </span><input type="text" value={this.state.location} onChange={e => this.setState({ location: e.target.value })} id="inputEditLocation"></input></p>


                            <div>
                                <p><span className="modal-label">Type: </span>{this.state.isDefinite}</p>
                                {this.state.isDefinite === "definite" ?
                                    <div>
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
                                                id="inputEditStartDate"
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
                                                id="inputEditEndDate"
                                            />
                                        </p>
                                    </div> : null
                                }
                            </div>

                            <p><span className="modal-label">Description: </span><input type="text" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} id="inputEditDescription"></input></p>
                            <p><span className="modal-label">Tag: </span><input type="text" value={this.state.tag} onChange={e => this.setState({ tag: e.target.value })} id="inputEditTag"></input></p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>CANCEL</Button>
                        <Button variant="primary" onClick={this.editOnePost}>SUBMIT</Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }
}

export default EditModal;

