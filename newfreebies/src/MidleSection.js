import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
//import PostView from './PostView';
import PostCardDetail from './PostCardDetail';
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
                    console.log("gettingDataDisplay counts")
                })
                this.setState({ posts: posts })
            })
            .catch(error => console.log(error));
    }

    searchDatabase = props => {
        var searchTerm = document.getElementById("search").value.toLowerCase();

        db.collection("posts")
            .get()
            .then(snapshot => {
                const posts = [];
                snapshot.forEach(doc =>  {

                    const data = doc.data();

                    if (data.title.toLowerCase().includes(searchTerm)) {
                        //console.log(doc.data().title);

                        posts.push({
                            key: doc.id,
                            data: data
                        })
                        //console.log(posts);
                    }
                });
                this.setState({ posts: posts });
            })
            .catch(error => console.log(error));
    }

    render() {

        if (this.props.searchCheck == 'yes') {
            this.searchDatabase(this.props);
        } else {
            this.getDataToDisplay(this.props);
        };

        return (
            <section>
                <CardColumns>

                    {this.state.posts &&
                        this.state.posts.map((onePost, i) => {
                            return (
                                <PostCardDetail userEmail={this.props.userEmail} onePost={onePost} key={i} />
                            );
                        })
                    }

                </CardColumns>


            </section>
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


