import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

function GetQuote() {
  return (
    <div>
      <Navbar/>
      <form className='container mt-5'>
        <h1>Get a Quote</h1>
        <p>Fill out the form below to get a quote for the vehicle you want.</p>
          <div className="row mb-3">
            <label htmlFor="carMake" className="col-sm-2 col-form-label">Make & Model</label>
            <div className="col">
              <input id='carMake' type="text" className="form-control" placeholder="Car Make" aria-label="Car Make" required/>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Car Model" aria-label="Car Model" required/>
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor="carYear" className='col-sm-2 col-form-label'>Car Year:</label>
              <div className='col-sm-10'>
                <input type="number" className='form-control' id="carYear" name="carYear" required/>
              </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor="carPrice" className='col-sm-2 col-form-label'>Estimated Price:</label>
            <div className='col-sm-10'>
              <input type="number" className='form-control' id="carPrice" name="carPrice" required/>
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor="carCondition" className='col-sm-2 col-form-label'>Condition:</label>
            <div className='col-sm-10'>
              <select className='form-select' id="carCondition" name="carCondition" required>
                <option value="" disabled selected>Select condition</option>
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor="carContact" className='col-sm-2 col-form-label'>Contact Information:</label>
            <div className='col'>
              <input type="text" className='form-control' id="carContact" name="carContact" placeholder="Your Name" required/>
            </div>
            <div className='col'>
              <input type="email" className='form-control' id="carEmail" name="carEmail" placeholder="Your Email" required/>
            </div>
            <div className='col'>
              <input type="tel" className='form-control' id="carPhone" name="carPhone" placeholder="Your Phone Number" required/>
            </div>
          </div>
          <button type="submit" className='btn btn-primary'>Get Quote</button>
          <p>We will contact you with a quote within 24 hours.</p>
        </form>
      <Footer/>
    </div>
  )
}

export default GetQuote
