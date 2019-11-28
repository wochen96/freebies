import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import EditModal from './EditModal';
import PostModal from './PostModal';
import DeleteModal from './DeleteModal'
import './modal.css';
import { db, auth } from './services/firebase';


class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPostModal: false,
            showEditModal: false,
            showDeleteModal: false
        }

        this.openEditModal = this.openEditModal.bind(this);
        this.openPostModal = this.openPostModal.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.closePostModal = this.closePostModal.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.handleDeleteOnePost = this.handleDeleteOnePost.bind(this);
    }

    openEditModal = () => {
        this.setState({
            showPostModal: false,
            showEditModal: true
        })
    }

    openPostModal = () => {
        this.setState({
            showPostModal: true,
            showEditModal: false
        })
    }

    openDeleteModal = () => {
        this.setState({
            showEditModal: false,
            showPostModal: true,
            showDeleteModal: true
        })
    }

    closeEditModal = () => {
        this.setState({ showEditModal: false })
    }

    closePostModal = () => {
        this.setState({ showPostModal: false })
    }

    closeDeleteModal = () => {
        this.setState({ showDeleteModal: false })
    }

    handleDeleteOnePost = () => {
        this.setState({
            showDeleteModal: false,
            showPostModal: false
        }, () => {
            db.collection("posts").doc(this.props.onePost.key)
                .delete()
                .then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
        });
    }

    render() {
        return (
            <div>
                {this.state.showPostModal && (
                    <PostModal
                        show={this.state.showPostModal}
                        onHide={this.closePostModal}
                        openEditModal={this.openEditModal}
                        openDeleteModal={this.openDeleteModal}
                        onePost={this.props.onePost} />
                )}
                {this.state.showEditModal && (
                    <EditModal
                        show={this.state.showEditModal}
                        onHide={this.closeEditModal}
                        onePost={this.props.onePost} />
                )}
                {this.state.showDeleteModal && (
                    <DeleteModal //ref={({deleteOnePost}) => {this.deleteOnePost = deleteOnePost}}
                        show={this.state.showDeleteModal}
                        onHide={this.closeDeleteModal}
                        onePost={this.props.onePost}
                        handleDeleteOnePost={this.handleDeleteOnePost}
                        state={this.state} />
                )}
            </div>

        );
    }
}

export default PostView;