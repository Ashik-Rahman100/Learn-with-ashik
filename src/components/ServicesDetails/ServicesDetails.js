import React from 'react';
import './ServicesDetails.css'

const ServicesDetails = () => {
    
    return (
        <div className =' service-details pb-5'>
            <h2 className ='text-center pt-5  pb-4 text-light fw-bold'>Course Overview</h2>
            <div className ='row pt-5'>
              <div className ='col-md-6'>
                <img className ='w-75 ' src="https://www.edx.org/static/ebde2a531bce94d2fc1ba075d1f19e57/learn_computer_programming.jpg" alt="" />
              </div>
           <div className ='col-md-6'>
                <h1 className= ' '>Build a Portfolio, Create a Network, <br /> and Land Your <br /> Dream Programming Job</h1>
                <p>Techdegree is a bootcamp-tier program that guides you through a full curriculum that includes a portfolio of curated projects, workshops, quizzes, and access to the exclusive Treehouse Slack community.</p>

                <button className ="btn btn-primary">Explore Techdegree</button>
             </div>
            </div>

           
            

        </div>
    );
};

export default ServicesDetails;