import React from 'react';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import About from '../About/About';
import ServicesDetails from '../ServicesDetails/ServicesDetails'


import './Home.css'

const Home = () => {

    return (
        <div className = 'home-container'>
            <Header></Header>
            <Overview></Overview>
            <About></About>
            <ServicesDetails></ServicesDetails>
        </div>
    );
};

export default Home;