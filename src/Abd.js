import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useCookies } from 'react-cookie';


function Abd() {
  const [cookies, setCookie] = useCookies(['name']);


  function tt() {
    setCookie('name', "", { path: '/' });
  }

  useEffect(() => {
    tt().then(() => { window.location.replace('/'); } )
  },[]);

  


}
export default Abd;
//<Navigate to="/doctor/signup_doctor" replace={true} />

