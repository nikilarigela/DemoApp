import React, { Component } from 'react';
import Name from './FormCompoenents/Name'
import Age from './FormCompoenents/Age'
import Gender from './FormCompoenents/Gender'
import Qualifications from './FormCompoenents/Qualification'
import './index.css';


class Form extends Component {
state={
          name : "",
          age : 0,
          gender : "",
          quali : ""
        };





changedHandler=(event) => {
  console.dir(event);

  this.setState( {
    name  : event.target.value,

  })

}




  render() {
      return(
        <form action = "results.html">
          <div className="name">
          <Name changed={this.changedHandler} hint=" Enter Name " name={this.state.name} />
          <Age  changed={this.changedHandler} agehint=" Enter Age " age={this.state.age}   />
          <Gender />
          <Qualifications />
          <input className="submitbutton" type="submit"/>
      </div>
    </form>
    );}


}
export default Form;
