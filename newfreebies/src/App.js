import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import { db, auth } from './services/firebase';
import axios from 'axios';

// components
import Landing from './Landing.js';
import Dashboard from './Dashboard';
import TestFirebase from './TestFirebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  // Update current user
  updateUser(user) {
    this.setState({
      user: user
    });
  }

  render() {
    if (firebase.auth().currentUser) {
      console.log("logged in");
    }
    else {
      console.log("not signed in");
    }
    console.log(this.state.user);
    //console.log(firebase.auth().currentUser);
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <main>
                <Landing />
              </main>
            );
          }} />
          <Route path="/home" render={() => {
            return (
              <Dashboard />
            );
          }} />
        </Switch>
      </div>
    );
  }
}
export default App;

/* class App extends Component {
  state = {
    posts: null,
    selectedFile: null
  }

  componentDidMount() {
    console.log('mounted');
    db.collection('posts')
      .get()
      .then(snapshot => {
        const posts = []
        snapshot.forEach(doc => {
          const data = doc.data()
          posts.push(data)
        })
        this.setState({ posts: posts })
        console.log(snapshot)
      })
      .catch(error => console.log(error));
  }

  addNewPost = () => {
    db.collection('posts')
      .add({
        description: 'Advice for new student',
        downvotes: '0',
        endTime: new Date(),
        isDefinite: false,
        location: 'ODE',
        picture: 'http:/url-to-image.png',
        startTime: new Date(),
        tag: 'advice',
        upvotes: '0',
        username: 'tran6388@uw.edu'

      })
      .then(res => {
        console.log(res.id)
      })
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {

  }


  render() {
    return (
      <div className="App">
        <h1>Upperline Students</h1>
        <button onClick={this.addNewPost}>New Post</button>
        <div>
          <input
            type="file"
            id="imageInput"
            onChange={this.fileSelectedHandler} />

          <button onClick={this.fileUploadHandler}></button>
        </div>
        {
          this.state.posts &&
          this.state.posts.map(post => {
            return (
              <div>
                <p>{post.description}</p>
                <p>{post.endTime.toDate().toString()}</p>
                <p>{post.isDefinite.toString()}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;*/