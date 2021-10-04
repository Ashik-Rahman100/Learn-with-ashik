import React from 'react';
import Navber from '../Navber/Navber';
import './Header.css';

const Header = () => {
    return (
        <div className ='Banner-container'>
            <div className = 'row d-flex banner align-items-center justify-content-center'>
                <div className="col-md-6">
                    <h2 style={{color:'red',marginBottom:'15px'}}>Student Center</h2>
                   <h1 className = 'title'>Learn what you <br /> love</h1>
                    <p className="text-white text-center mt-3">Learn With Ashik Pro Student gives you the tools you need to discover and pursue your passions through programming — all for just $149.99/year.</p>
                   <button className="mt-3 trail-btn fw-bold">Start Free Trial</button>
                </div>
                <div className="col-md-6"></div>
            </div>

        </div>
    );
};

export default Header;