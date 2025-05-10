import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../Header/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'


function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <Navbar/>
      <form className="container mt-5">
        <h1>Sign Up</h1>
        <div className="row mb-3">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">Full name</label>
          <div className="col">
            <input id='firstName' type="text" className="form-control" placeholder="First name" aria-label="First name" required/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" required/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <div className="input-group mb-3">
            <input 
            type={passwordVisible? 'text':'password'} 
            className="form-control" 
            id="inputPassword3"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
            title="Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
            required />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible? faEye:faEyeSlash}/>
            </button>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form><br/>
      <div className='container'>
        <h6>Already have an account?</h6>
        <small className='me-2'>Log in now to access your account!</small>
        <button className='btn btn-secondary btn-sm'><Link to="/Log_In">Log In</Link></button>  
    </div>
    </div>
  )
}

export default SignUp