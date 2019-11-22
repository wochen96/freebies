import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card, CardColumns } from 'react-bootstrap';
//import PostView from './PostView';
import PostCardDetail from './PostCardDetail'
import Data from './json.json'


class MidleSection extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <CardColumns>

                    {Data.map((onePost, i) => {
                        return (
                            <PostCardDetail onePost={onePost} />
                        );
                    })}

                </CardColumns>


            </div>
        );

    }
}

export default MidleSection;