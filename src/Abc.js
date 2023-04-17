import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default class Abc extends Component {

  render() {
    return (
        <div >
          <h1>site map</h1><br></br>
          
          <a href="/patient/signup">sign up patient</a><br></br>

          <a href="/doctor/signup_doctor">sign up doctor</a><br></br>

          <a href="/login">login page</a><br></br>

          <a href="/doctor/home">home doctor</a><br></br>
          
          <a href="/logout">logout</a><br></br>

          
          <br></br>
          

        </div>
    )
  }
}

//<Navigate to="/doctor/signup_doctor" replace={true} />

