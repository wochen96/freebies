import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { db, auth, storage } from './services/firebase';
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
            tag: null,
            upvotes: null,
            username: null,
            startDate: null,
            endDate: null,

            imageToshow: null,
            imageToUpload: null,
            url: '',
            imageName: null,
            progress: 0
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

        const image = this.state.imageToUpload;

        if (image == null) {
            this.addNewPostWithDefaultImage();
        } else {
            this.addNewPostWithUploadImage(image);
        }


    }

    addNewPostWithUploadImage = (image) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // Progess function:
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function:
                console.log('this is the error during upload: ' + error);
            },
            () => {
                // Complete function:
                storage.ref('images').child(image.name).getDownloadURL()
                    .then(url => {
                        this.setState(function () {

                            return {
                                title: document.getElementById('inputTitle').value,
                                location: document.getElementById('inputLocation').value,
                                description: document.getElementById('inputDescription').value,
                                isDefinite: this.state.selectedOption,
                                url: url,
                                imageName: image.name,
                                tag: document.getElementById('inputTag').value,
                                username: 'tran6388@uw.edu',
                            }

                        }, () => this.addFunction())
                    });
            });
    }

    addNewPostWithDefaultImage = () => {
        this.setState(function () {
            return {
                title: document.getElementById('inputTitle').value,
                location: document.getElementById('inputLocation').value,
                description: document.getElementById('inputDescription').value,
                isDefinite: this.state.selectedOption,
                url: 'https://firebasestorage.googleapis.com/v0/b/freebies-f44de.appspot.com/o/uw_icon.png?alt=media&token=40163c4d-8a5e-4406-87ee-9a4e139ab449',
                imageName: 'default',
                tag: document.getElementById('inputTag').value,
                username: 'tran6388@uw.edu',
            }

        }, () => this.addFunction());
    }

    handleImageChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({
                imageToshow: URL.createObjectURL(image),
                imageToUpload: image
            })
        }
    }

    addFunction() {
        db.collection('posts')
            .add({
                title: this.state.title,
                location: this.state.location,
                description: this.state.description,
                downvotes: '0',
                endDate: this.state.endDate,
                isDefinite: this.state.isDefinite,
                url: this.state.url,
                startDate: this.state.startDate,
                tag: this.state.tag,
                upvotes: '0',
                imageName: this.state.imageName,
                createAt: new Date(),
                username: 'tran6388@uw.edu'
            })
            .then(res => {
                console.log(res.id)
            })
        this.createClose();
    }


    render() {
        const style = {
            height: '20vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }

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

                            <div style={style}>
                                <img src={this.state.imageToshow} height='100' width='150' />
                                <input type='file' onChange={this.handleImageChange} />
                                <progress value={this.state.progress} max="100" />

                                {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height='300' width='400' /> */}
                            </div>


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
                            SUBMIT
                            </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );

    }
}

export default CreateModal;