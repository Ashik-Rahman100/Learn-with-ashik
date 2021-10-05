import React, { useEffect, useState } from 'react'
import Course from '../Course/Course';

import './Services.css'

const Services = () => {
    const [courses, setCources] = useState([])
  
    useEffect(() =>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data =>setCources(data))
    },[])

  

    return (
        <div className = 'services-container pb-4 pt-4'>
            <h2 className = 'text-center pb-5 fw-bold text-light'>Our Services</h2>
            <div className = 'course-container'>
                {
                    courses.map(course => <Course
                         course ={course}
                         key = {course.id}
                        ></Course>)
                }
            </div>

        </div>
    );
};

export default Services;