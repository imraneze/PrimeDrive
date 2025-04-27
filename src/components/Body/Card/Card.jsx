import React from 'react'
import './Card.css'
import '@google/model-viewer';
import { useState } from 'react';

function Card(props) {
  const [orbit, setOrbit] = useState("-90deg 90deg 8m")
  const hoverRotate = () => {
    setOrbit("0deg 85deg 0.5m")
  }
  const resetRotation = ()=>{
    setOrbit("-90deg 90deg 8m")
  }
  return (
    <div className='Card' id={props.car.id} onMouseEnter={hoverRotate} onMouseLeave={resetRotation}>
        <model-viewer
        src={props.car.carmodel}
        alt={`A 3D model of ${props.car.name}`}
        ar
        camera-orbit={orbit}
        className="models"
      />
      <h3>{props.car.name}</h3><br />
      <b>{props.car.price}</b>
      <p>{props.car.description}</p>
    </div>
  )
}

export default Card
