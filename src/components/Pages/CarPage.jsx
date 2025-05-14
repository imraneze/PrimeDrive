import React from 'react'
import Navbar from '../Header/Navbar'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import CarsData from '../CarsData'
import Hottest from '../Body/Hottest/Hottest'

function CarPage(props) {
    const [orbit, setOrbit] = useState("0deg 85deg 0.5m")
    const [FOV, setFOV] = useState("45deg")
    const handleMouseEnter = () => {
        setOrbit("-90deg 90deg 8m")
        setFOV("60deg")
    }
    const handleMouseLeave = () => {
        setOrbit("0deg 85deg 0.5m")
        setFOV("45deg")
    }
  return (
    <div>
        <Navbar/>
    <div className='card position-relative m-5 CarPage'>
        <div className='PageModel card-img-top'>
          <model-viewer
            src={props.car.carmodel}
            alt={`A 3D model of ${props.car.name}`}
            ar
            camera-controls
            disable-pan
            camera-orbit={orbit}
            field-of-view={FOV}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{width: "100%", height: "100%",}}  
          />
        </div>
        <div className='bg-dark text-white p-3 card-body'>

            <h1 className='text-center'>Car Details</h1>
            <div className='card-text'>
            <h2>{props.car.name}</h2>
            <p>{props.car.description}</p>
            <p>Price: {props.car.price} DH</p>
            <p>Make: {props.car.Make}</p>
            <p>Model: {props.car.Model}</p>
            <p>Year: {props.car.Year}</p>
            <p>Color: {props.car.Color}</p>
            <p>Kilometrage: {props.car.Kilometrage} km</p>
            <p>Condition: {props.car.Condition}</p>
            <p>Engine: {props.car.Engine}</p>
            <button className='btn btn-success'><Link to={'/Schedule_a_Test_Drive'}>Book Test Drive</Link></button>
            </div>
        </div>
     </div>
        <div className='container-fluid'>
            <h1 className='text-center'>Similar Cars</h1>
        </div>
     <Footer/>
    </div>
  )
}

export default CarPage
