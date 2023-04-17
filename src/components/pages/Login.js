import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useCookies } from 'react-cookie';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cookies, setCookie] = useCookies(['name']);
    function tt(newName) {
      setCookie('name', newName, { path: '/' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const PObject = {
            email: email,
            password: pass,   
        };

        axios.post('http://localhost:4000/api/app/authen',PObject).then(res => {
        console.log(res.data)

        if(res.data == "login success"){
        
        tt("bob");
          Swal.fire({
            icon: 'success',
            title: res.data,
            showConfirmButton: false,
            timer: 2000
          }).then(
            () => { window.location.replace('/doctor/home'); }
         )
        }
        else{
          Swal.fire({
            icon: 'error',
            title: res.data,
            showConfirmButton: false,
            timer: 5000
          })
        }
        });
        
    }


    return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <form className='form' onSubmit={handleSubmit}>
              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='login' onChange={(e) => setEmail(e.target.value)} type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' onChange={(e) => setPass(e.target.value)} type='password' size="lg"/>

              <MDBBtn size='lg' type="submit" >  Login   </MDBBtn>
              </form>

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;