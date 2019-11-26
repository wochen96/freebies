import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

// components
import Header from './header';
import Footer from './footer';
import MidleSection from './MidleSection'


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header />

                <MidleSection />

                <Footer />
            </div>
        );

    }
}

export default Dashboard;