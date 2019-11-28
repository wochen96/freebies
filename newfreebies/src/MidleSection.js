import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap';
//import PostView from './PostView';
import PostCardDetail from './PostCardDetail'
import Data from './json.json'
import { db, auth } from './services/firebase';


class MidleSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            selectedFile: null
        }
    }

    getDataToDisplay = props => {

        db.collection('posts').where('isDefinite', '==', props.isDefiniteSelected)//.orderBy('startDate', 'desc')
            .get()
            .then(snapshot => {
                const posts = []
                snapshot.forEach(doc => {
                    const data = doc.data();
                    posts.push({
                        key: doc.id,
                        data: data
                    })
                })
                this.setState({ posts: posts })
            })
            .catch(error => console.log(error));
    }


    render() {
        this.getDataToDisplay(this.props);
        return (
            <div>
                <CardColumns>

                    {this.state.posts &&
                        this.state.posts.map((onePost, i) => {
                            return (
                                <PostCardDetail onePost={onePost} key={onePost.id} />
                            );
                        })
                }
                
                </CardColumns>


            </div>
        );

    }
}

export default MidleSection;

/*{Data.map((onePost, i) => {
    return (
        <PostCardDetail onePost={onePost} key={i} />
    );
})}*/

/*{this.state.posts &&
    this.state.posts.map((onePost, i) => {
        return (
            <PostCardDetail onePost={onePost} key={i} />
        )
    });
}*/