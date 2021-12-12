import './page3.css';
import header from './header.png'
import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Create extends Component {

  constructor(props) {
    super(props);
 
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonPass = this.onChangePersonPass.bind(this);
    this.onChangePersonPhone = this.onChangePersonPhone.bind(this);
    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonDob = this.onChangePersonDob.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      person_name: "",
      person_pass:"",
      person_phone:"",
      person_email:"",
      person_dob:""
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
  onChangePersonPhone(e) {
    this.setState({
      person_phone: e.target.value,
    });
  }
  onChangePersonEmail(e) {
    this.setState({
      person_email: e.target.value,
    });
  }
  onChangePersonDob(e) {
    this.setState({
      person_dob: e.target.value,
    });
  }
 
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
 
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_pass: this.state.person_pass,
      person_phone: this.state.person_phone,
      person_email: this.state.person_email,
      person_dob: this.state.person_dob,
    };
 
    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => console.log(res.data));
 
    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_pass:"",
      person_phone:"",
      person_email:"",
      person_dob:"",
    });
  }
  render()
  {
    return (<div>
      <img src = {header} width = "1540px" className = "img"/>
            <div>
                <h1 className="h">Register</h1>
            </div>
              <form className="f"   onSubmit = {this.onSubmit}>
                <div>
                  <div>
                <label>Name:* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type = "text" name = "nam"  required style ={{"width":"200px"}} value={this.state.person_name} onChange={this.onChangePersonName}/><br/><br/>
               </div>
               <label>Password:* &nbsp;</label>
               <input type = "password" name = "password"  value = {this.state.person_pass} onChange={this.onChangePersonPass} required style ={{"width":"200px"}}/><br/><br/>
               <label>Phone:* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type = "text" name = "number" placeholder = "+91" value={this.state.person_phone} onChange={this.onChangePersonPhone} required style ={{"width":"200px"}}/><br/><br/>
               <label>Email:* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type = "email" name = "email" value={this.state.person_email} onChange={this.onChangePersonEmail}required style ={{"width":"200px"}}/><br/><br/>
               <label>DOB:*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type = "date" name = "dob" value={this.state.person_dob} onChange={this.onChangePersonDob}required style ={{"width":"200px"}}/><br/><br/>
               <label>Gender:*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               Male:&nbsp;<input type = "radio" name = "gender" value = "male"/>&nbsp;&nbsp;
               Female:&nbsp;<input type = "radio" name = "gender" value = "female"/>&nbsp;&nbsp;
               Other:&nbsp;<input type = "radio" name = "gender" value = "other"/><br/><br/>
               <div id = "button">
             <button type = "submit"> <nav>
        <Link  to = "/App1">Submit</Link> 
          </nav></button>&nbsp;&nbsp;
               <button type = "reset">Reset</button>
               </div>
               </div>
              </form>
              </div>
    )
  }
}
