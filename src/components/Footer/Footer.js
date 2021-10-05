import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left-container text-start">  
                               <h3>Learn with Ashik</h3>
                                <p>Focus with Computer Science &&  Technology.  </p>
                                <p><small>Learn with Ashik © . All rights reserved.</small></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-menu-container">
                                <h3>Navigate Our Site</h3>
                                <ul className="menu-items">
                                    <li className="menu">Home</li>
                                    <li className="menu">Services</li>
                                    <li className="menu">About</li>
                                    <li className="menu">Details</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-us">
                                <h3>Contact Us</h3>
                                 <input className='form-control mt-5'  type="text" placeholder ='please enter your email' />
                                 <h5 className= 'text-start text-danger'>Phone : +66 223 7999 12</h5>
                                 <div className ='address text-start'>
                                    
                                    <p> 95 Happiness Dr, Welaka, FL, 32193 California USA</p>
                                    <p>1 Kudra Dr, Washington Crossing, Sedni USA</p>
                                    

                                 </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;