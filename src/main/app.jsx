import '../commom/template/dependencies'
import React from "react";

import Header from '../commom/template/header'
import Sidebar from '../commom/template/sidebar';
import Footer from '../commom/template/footer';
import Routes from './routes';

export default props => (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <Routes />
        </div>
        <Footer />

    </div>
)