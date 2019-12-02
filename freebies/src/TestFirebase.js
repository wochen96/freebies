import React, { Component } from 'react';
import firebase from 'firebase/app';


class TestFirebase extends Component{

    constructor() {
        super();
        this.state = {
            users: []
        }

        this.updateUserData = this.updateUserData.bind(this)
    }
    updateUserData = () => {
        var usersRef = firebase.database().ref('users/');
        let userArray = []

        usersRef.on('value', function(snapshot) {

            console.log(snapshot.val())

            for (var key of Object.keys(snapshot.val())) {
                userArray.push(snapshot.val()[key]['username'])
            }
            console.log(userArray)
            
        });
        return userArray
    }

    componentDidMount() {
        let userArray = this.updateUserData()
        console.log("state set succesfully")
        console.log(userArray)
        this.setState({
         users:userArray 
       })
    }
    
    
    render() {
       
        return(
            <div>
                <h1> {this.state.users.toString()}</h1>
            </div>
           
        );
    }

}

export default TestFirebase;