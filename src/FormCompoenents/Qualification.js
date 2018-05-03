import React from 'react';
import '../index.css';


const quali = (props) => {
return(
  <div className="name">
    <select>
      <option value="SSC" name = "select">SSC</option>
      <option value="10+2" name = "select">10+2</option>
      <option value="underGraduation" name = "select">Under Graduation</option>
      <option value="postGraduation" name = "select">Post Graduation</option>
    </select>
  <p>Qualifications is <span>SSC</span></p>
</div>
)
}

export default quali;
