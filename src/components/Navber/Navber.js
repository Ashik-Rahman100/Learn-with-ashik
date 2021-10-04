import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {

    return (
        <div className ='nav-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div >
                            <Link to ='/home' style={{ textDecoration: 'none' }}>
                                <li className="logo items">LEARN WITH ASHIK</li>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="nav-item-container">
                            <ul className = 'd-flex justify-content-center align-items-center'>
                                <Link to ='/home' style={{ textDecoration: 'none' }}>
                                    <li className ='items'>HOME</li>
                                </Link>
                                <Link to = '/about' style={{ textDecoration: 'none' }}>
                                   <li className ='items'>ABOUT US</li>
                                </Link>
                                <Link to='/services' style={{ textDecoration: 'none' }}>
                                   <li className ='items'>SERVICES</li>
                                </Link>
                                <Link to = 'overview' style={{ textDecoration: 'none' }}>
                                   <li className ='items'>DETAILS</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;