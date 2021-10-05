import React from 'react';

const Service = (props) => {

    const{title,img,dis,price,category} = props.data;
    const  courseStyle = {
        border:"1px solid gray",
        borderRadius : '8px',
        boxShadow: '10px 10px 10px grey',
        height: '500px',
        margin: '15px 0px'
    }
    return (
        <div>
            
            <div className ='col mt-5 ' style = {courseStyle}>
                <img src={img} alt="" />
                <h2 className = 'mt-2'>{title}</h2>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Discript: {dis}</p>
              </div>
        </div>
    );
};

export default Service;