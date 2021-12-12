import './App1.css';
import header from './header.png'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import App3 from './page4'
export default class App1 extends Component {
    constructor(props)
    {
      super(props);
      
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonPass = this.onChangePersonPass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      person_name: "",
      person_pass:"",
    };
  }
 
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }
  onChangePersonPass(e) {
    this.setState({
      person_pass: e.target.value,
    });
  }
 
// This function will handle the submission.

  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_pass: this.state.person_pass,
    };
    
    axios
      .post("http://localhost:5000/record/login", newperson)
      .then((res) => {console.log(res.data);
        //console.log(typeof(res))
        //console.log(JSON.stringify(res).length)
        global.name=res.data
        if(res.data)
        {
          window.alert("User found")
          window.location.href='/Filter'
        }
        //console.log(flag)
        
      });
    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_pass:"",
    })
  }
    render(){
    return (
      <div>
      <img src = {header} width = "1540px" className = "img"/>
   
  <form className = "label" method = "POST" onSubmit = {this.onSubmit}>
  <h1 className="Try">Sign In </h1>
  <div className="Name"><label>Name:&nbsp;&emsp;&nbsp;&nbsp;</label>
  <input type = "text" value={this.state.person_name} onChange={this.onChangePersonName} id = "name" name = "name" required/><br/><br/></div>
  <label>Password:&nbsp;</label>
  <input type = "password" value = {this.state.person_pass} onChange={this.onChangePersonPass} id = "password" name = "password" required/><br/><br/><br/>
  <div className = "div">
  <button >Forgot</button>
  <button type ="submit">Submit</button>
  &nbsp;&nbsp;
  </div><br/>
  <div className="mem"><p>Not a member?</p></div>
  <div className="Nav1">
  <nav>
          <Link  to = "/App2">Register</Link> 
        </nav>
  </div>
  
  </form>
  </div>
    )
    }
}

