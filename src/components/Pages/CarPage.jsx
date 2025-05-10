import React from 'react'
import Navbar from '../Header/Navbar'
import { useState, useEffect } from 'react'
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
    <div className='container-fluid position-relative top-100 start-0 row' style={{height: "50vh" , marginTop: "15vh", marginBottom:"15vh"}}>
    <div className='col'>
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
        className="w-100 h-100 top-0 start-0"
      />
    </div>
        <div className='col bg-dark text-white'>
            <h1>{props.car.name}</h1>
            <p>{props.car.description}</p>
            <p>Price: {props.car.price} DH</p>
            <p>Make: {props.car.Make}</p>
            <p>Model: {props.car.Model}</p>
            <p>Year: {props.car.Year}</p>
            <p>Color: {props.car.Color}</p>
            <p>Kilometrage: {props.car.Kilometrage} km</p>
            <p>Condition: {props.car.Condition}</p>
            <p>Engine: {props.car.Engine}</p>
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
