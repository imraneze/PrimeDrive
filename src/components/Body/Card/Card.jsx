import React from 'react'
import './Card.css'
import '@google/model-viewer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const [orbit, setOrbit] = useState("-90deg 90deg 8m")
  const hoverRotate = () => {
    setOrbit("0deg 85deg 0.5m")
  }
  const resetRotation = ()=>{
    setOrbit("-90deg 90deg 8m")
  }
  return (
    <div className='Card card' id={props.car.id} onMouseEnter={hoverRotate} onMouseLeave={resetRotation}>
      <Link to={`/Inventory/${props.car.name}`}>
        <model-viewer
        src={props.car.carmodel}
        alt={`A 3D model of ${props.car.name}`}
        ar
        camera-orbit={orbit}
        className="models card-img-top"
      />
      <div className='card-body'>
        <h2 className='card-title'>{props.car.name}</h2>
        <b className='card-text'>{props.car.price} DH</b>
      </div>
      </Link>
    </div>
  )
}

export default Card
