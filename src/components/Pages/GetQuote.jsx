import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function GetQuote() {
  return (
    <div>
      <Header/>
    <div className='get-quote'>
        <h1>Get a Quote</h1>
        <p>Fill out the form below to get a quote for your car.</p>
        <form>
            <label htmlFor="car-make">Car Make:</label>
            <input type="text" id="car-make" name="car-make" required/>
            <label htmlFor="car-model">Car Model:</label>
            <input type="text" id="car-model" name="car-model" required/>
            <label htmlFor="car-year">Car Year:</label>
            <input type="number" id="car-year" name="car-year" required/>
            <button type="submit">Get Quote</button>
        </form>
    </div>
        <Footer/>
    </div>
  )
}

export default GetQuote
