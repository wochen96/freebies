import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDefiniteSelected: 'definite',
            checkBoolean: true
        }
    }

    changeDefinite = event => {
        this.setState({
            isDefiniteSelected: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Header changeDefinite={this.changeDefinite} />

                {/* <button value="definite" onClick={this.changeDefinite}>DEFINITE</button>

                <button value="indefinite" onClick={this.changeDefinite}>INDEFINITE</button> */}

                <MidleSection isDefiniteSelected={this.state.isDefiniteSelected} />

                <Footer />
            </div>
        );

    }
}

export default Dashboard;