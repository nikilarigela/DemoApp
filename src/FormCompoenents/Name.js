import React from 'react';
import '../index.css';


const name = (props) => {
return(
  <div className="name">
  <h1> Name :   <input type="text" placeholder={props.hint} onChange={props.changed} /></h1>
  <p>Name is <span>{props.name}</span></p>
</div>)
}

export default name;
