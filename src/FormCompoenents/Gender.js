import React from 'react';
import '../index.css';


const gender = (props) => {
return(
  <div className="name">

  <input type="radio" name="gender" value="male"/>Male <br/><br/>
  <input type="radio" name="gender" value="female"/>Female<br/><br/>
  <input type="radio" name="gender" value="other"/>Others<br/>
  <p>Gender is <span>Male</span></p>
</div>
)
}

export default gender;
