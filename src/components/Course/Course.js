import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';

const Course = (props) => {

    const {title,price, img,id,category,dis} = props.course;
   
  const  courseStyle = {
        border:"1px solid gray",
        borderRadius : '8px',
        boxShadow: '10px 10px 10px grey',
        height: '500px',
        margin: '15px 0px'
    }
    return (
        <div>
            <div> 
                 <div>
                     <div style ={courseStyle}>
                        <img className = 'w-75' src={img} alt="" />
                        <h4 className ='mt-2'>{title}</h4>
                        <p>Course Category : {category}</p>
                        <p><small>Price : ${price}</small></p>
                        <p>Discription : {dis}</p>
                        <Link to = {`/course/${id}`}>
                        <button  className = "course-btn">Find Out More</button>
                        </Link>
                        
                     </div>   
                 </div>

            </div>
        </div>
    );
};

export default Course;