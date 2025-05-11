import React from 'react'
import StarRating from '../../starRating'

function RateCard(props) {
  return (
    <div className='Card h-100'>
        <h4>{props.client.name}</h4><br />
        <p>{props.client.description}</p><br />
        <StarRating rating={props.client.rating} />
    </div>
  )
}

export default RateCard
