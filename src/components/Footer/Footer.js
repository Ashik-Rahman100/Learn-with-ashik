import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">  
                               <h2>Learn with Ashik</h2>
                                <p>Our Main Focus is Computer Science &&  Technology.  </p>
                                <p><small>Learn with Ashik © . All rights reserved.</small></p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul className="menu-items">
                                    <li className="menu">Home</li>
                                    <li className="menu">Services</li>
                                    <li className="menu">About</li>
                                    <li className="menu">Details</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="contact-us">
                                <h2>Contact Us With Our Platform</h2>
                                 <input className='form-control mt-5'  type="text" placeholder ='please enter your email' />
                                 <h5 className= 'text-start text-danger'>Phone : +66 223 7999 12</h5>
                                 <div className ='address text-start'>
                                     <p>Barishal, Patuakhali, Bangladesh</p>
                                    <p>263, California USA</p>
                                    <p>34, Sedni USA</p>

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