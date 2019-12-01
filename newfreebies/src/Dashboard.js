import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


import firebase from "firebase/app";
import 'firebase/firestore'


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDefiniteSelected: 'definite',
            searchCheck: 'no'
        }
        console.log(this.props.user);

        this.refSearch = React.createRef();
    }

    changeDefinite = event => {
        this.setState({
            isDefiniteSelected: event.target.value
        })
    }

    searchDatabase = (event) => {
        this.setState({
            searchCheck: event.target.value
        })
    }
    

    render() {
        return (
            <div>
                <Header changeDefinite={this.changeDefinite} searchDatabase={this.searchDatabase} />

                {/* <p>{this.props.user}</p> */}

                <Switch>
                    <Route path="/home" render={() => {
                        return (
                            <MidleSection isDefiniteSelected={this.state.isDefiniteSelected} searchCheck={this.state.searchCheck} />
                        );
                    }} />

                    {/* <Route path="/contact" render={() => {
                            return (
                                <ContactUs />
                            );
                        }} /> */}

                    <Route exact path="/contact" component={ContactUs} />
                    <Route path="/about" component={AboutUs} />

                </Switch>

                <Footer style={{ position: 'absolute', bottom: '0', right: '0' }} />
            </div>
        );

    }
}

export default Dashboard;