import {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import CarsData from '../CarsData'
import {MakeOptions,YearOptions} from '../CarsData'
import Card from '../Body/Card/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'


function Inventory() {
  const [cars, setCars] = useState(CarsData)
  function handleSearch(e) {
    e.preventDefault()
    const searchTerm = document.getElementById('Search').value.trim().toLowerCase()
    if (searchTerm === '') {
      setCars(CarsData)
    } else {
    const filteredCars = CarsData.filter(car => car.name.toLowerCase().includes(searchTerm))
    setCars(filteredCars)}
  }
  function handleFilter(e){
    e.preventDefault()
    const make = document.getElementById('Make').value
    const minPrice = parseInt(document.getElementById('MinPrice').value) || 0
    const maxPrice = parseInt(document.getElementById('MaxPrice').value) || Infinity
    const year = parseInt(document.getElementById('Year').value) || 0
    const filteredCars = CarsData.filter(car => {
      return (make === '' || car.Make === make) &&
             (car.price >= minPrice && car.price <= maxPrice) &&
             (year === 0 || car.Year === year)
    })
    setCars(filteredCars)
  }
  return (
    <div>
      
      <Navbar/>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-center font-bold'>Inventory</h1>
        <p className='text-center'>Explore our wide range of vehicles available for sale.</p>
        <form className='container-fluid row mb-3'>
          <div className="input-group col">
            <input type="text" id='Search' className="form-control" placeholder="Search for a car..." aria-label="Search for a car..." aria-describedby="SearchButton"/>
            <button className="btn btn-outline-primary z-0" type="submit" id="SearchButton" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div className='col-auto row'>
            <div className='col-auto'>
              <select className='form-select' id="Make" name="Make">
                <option value="" selected>Select Make</option>
                {MakeOptions.map((Make) => (
                  <option key={Make} value={Make}>{Make}</option>
                ))}
              </select>
            </div>
            <div className='col-auto input-group Pricefilter'>
              <input type="number" className='form-control' id="MinPrice" name="MinPrice" placeholder='Min Price' aria-label="Min Price"/>
              <input type="number" className='form-control' id="MaxPrice" name="MaxPrice" placeholder='Max Price' aria-label="Max Price"/>
            </div>
            <div className='col-auto'>
              <select className='form-select' id="Year" name="Year">
                <option value="" selected>Select Year</option>
                {YearOptions.map((Year) => (
                  <option key={Year} value={Year}>{Year}</option>
                ))}
              </select>
            </div>
            <button className='btn btn-outline-success col-auto' type="submit" id="FilterButton" onClick={handleFilter}><FontAwesomeIcon icon={faFilter} /></button>
          </div>
        </form>
        <div className='container-fluid'>
          {(cars.length>0)?(
            <div className='row row-cols-auto inventory'>
            {cars.map((car) => (
            <div className='col mb-5 max-width-10' key={car.id}>
              <Card car={car} />
            </div>
          ))}
          </div>
        ):(
          <div className="alert alert-light" role="alert">
            <h2 className='alert-heading'>No Cars Found</h2>
            <p>Try searching for a different car or check back later.</p>
            <Link to="/Get_a_Quote" className='alert-link'>Or Get A Quote</Link>
          </div>
          )}
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Inventory
