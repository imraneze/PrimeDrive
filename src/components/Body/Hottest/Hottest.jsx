import React from 'react'
import './Hottest.css'
import Card from '../Card/Card'

function Hottest(props) {
  
  return (
    <div className='homesection'>
      <div className='top'>
        <h3>{props.title} <hr /></h3>
        <button>SEE MORE {'>'}</button>
      </div>
        <div className='carssection'>
          <div className='fade-left'/>
          <div className='section'>
            {props.cars.map(car =>(
              <Card key={car.id} car={car}/>
            ))}
          </div>
          <div className='fade-right'/>
        </div>
    </div>
  )
}

export default Hottest
