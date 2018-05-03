import React from 'react';
import '../index.css';


const results = (props) => {
return(
  <div className="name">
  <h1> Name : <span>{props.age}</span>   /></h1>
  <h1> Age : <span>{props.age}</span>   /></h1>
  <h1> Gender : <span>{props.age}</span>   /></h1>
  <h1> Qualifications : <span>{props.age}</span>   /></h1>
</div>)
}

export default results;
