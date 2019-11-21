import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import EditModal from './EditModal';
import PostModal from './PostModal';
import './modal.css';


class PostView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPostModal: false,
            showEditModal: false
        }

        this.openEditModal = this.openEditModal.bind(this);
        this.openPostModal = this.openPostModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.closePostModal = this.closePostModal.bind(this);
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

    closeEditModal = () => {
        this.setState({showEditModal: false})
    }

    closePostModal = () => {
        this.setState({showPostModal: false})
    }

    render() {
        return(
            <div>
                {this.state.showPostModal && (
                    <PostModal
                    show={this.state.showPostModal}
                    onHide={this.closePostModal}
                    showEditModalClick={this.openEditModal}/>
                )}
                {this.state.showEditModal && (
                    <EditModal
                    show={this.state.showEditModal}
                    onHide={this.closeEditModal}/>
                )}
            </div>
            
        );
    }
}

export default PostView;