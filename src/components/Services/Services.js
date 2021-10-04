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
        <div>
            <div className = 'course-container'>
                {
                    courses.map(course => <Course
                         course ={course}
                         key = {course.id}
                        >hello</Course>)
                }
            </div>
        </div>
    );
};

export default Services;