import React from 'react';
import '../index.css';


const age = (props) => {
return(
  <div className="name">
  <h1> Age :   <input type="number" placeholder={props.agehint} onChange={props.changed} /></h1>
  <p >Age is <span>{props.age}</span></p>
</div>)
}

export default age;
