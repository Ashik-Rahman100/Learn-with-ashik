import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className ='about-container row'>
             <h2 className = 'text-center mt-5  mb-4 text-light fw-bold'>About Us </h2>
            <div className="half-with col-md-6 ">
                <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVEtEAxBOyaQ2uwQjXOLzn_Xy5MMWUi-xdA&usqp=CAU" alt="" />
            </div>
            <div className="half-with col-md-6">
                <h1>Computer Science Career Path</h1>
                <p>This new Path is designed with students in mind. Get a strong foundation in all the skills and languages that are typically taught in a 4-year college CS degree. In addition to learning the abstract concepts that are fundamental to all of programming, you’ll also get hands-on experience that will help you problem-solve like a real programmer.</p>

                <ul>
                    <p>You’ll learn:</p>
                    <li>Python, data structures, and algorithms</li>
                    <li>Database fundamentals using PostgreSQL</li>
                    <li>The math and architecture of computer science</li>
                </ul>
                
                
            </div>
        </div>
    );
};

export default About;