import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import CarsData from '../CarsData'

function TestDrive() {
  return (
    <div>
      <Navbar/>
       
      <div className='container flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Test Drive</h1>
        <p className='text-lg'>Book your test drive today!</p>
        <form className='w-1/2 mt-5'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input type="tel" className="form-control" id="phone" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="carModel" className="form-label">Car Model:</label>
            <select className='form-select' id="carCondition" name="carCondition" required>
              <option value="" disabled selected>Select car</option>
              {CarsData.map((car) => (
                <option key={car.id} value={car.name}>{car.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className='btn btn-primary'>Book Test Drive</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default TestDrive