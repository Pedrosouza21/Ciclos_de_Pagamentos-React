import React from "react";
import Navbar from "./navbar";

export default props => (
    <header className='main-header'>
        <a href="/#/" className="logo">
        <span className="logo-lg">
           <i className="fa fa-money"></i>
           <b> My</b>Money 
        </span>

        </a>
        <nav className='navbar navbar-static-top'>
            <a href classname="sidebar-toogle" data-toogle ='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)