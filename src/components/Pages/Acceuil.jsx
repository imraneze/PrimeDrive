import React from 'react'
import '../../App.css'
import Header from '../Header/Header'
import Hottest from '../Body/Hottest/Hottest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar,faCoins,faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import CarsData from '../CarsData'
import RateCard from '../Body/Card/RateCard'

function Acceuil() {

  const Clients = [
    {name:'Sofia Ait Bensalah',description:'An incredible car buying experience! Smooth, fast, and the car quality is beyond amazing. Highly recommend!',rating:5},
    {name:'Adam Khattabi',description:'Customer service was very professional. I got a fantastic deal and the car arrived in perfect condition.',rating:4.5},
    {name:'Lina El Amrani',description:'The process was easy, and I love my new car. A few minor delays but the team kept me informed.',rating:4},
    {name:'Youssef Oulad Said',description:'Very trustworthy sellers. I paid with crypto and everything went smoothly. Thank you for the great service!',rating:4.5},
    {name:'Salma Zerouali',description:'Excellent selection of cars and flexible financing options. My dream car is now parked outside!',rating:5},
  ]  
  return (
    <div className="Acceuil">
      <Header/>
      <div className='sections' id='more'>
      <Hottest title='Hotest In Store' cars={CarsData.slice(0,5)}/>
      <Hottest title = 'Newest in Store' cars={CarsData.slice(-5)}/>
      </div>
      <div className='WhyUs'>
        <img src="../../section-3.jpg" alt="rs6" />
        <div className='left'>
          <FontAwesomeIcon icon={faRankingStar} size='2xl'/>
          <h4>Excellence in Every Detail</h4>
          <p>At PrimeDrive, we don’t just sell cars — we deliver unmatched quality. Every vehicle is handpicked and thoroughly inspected to meet the highest standards of performance, reliability, and style. Because when it comes to your drive, only the best will do.</p>
        </div>
        <div className='right'>
          <FontAwesomeIcon icon={faCoins} size='2xl' />
          <h4>Drive Luxury. Pay Smart.</h4>
          <p>At PrimeDrive, we offer an exclusive selection of high-performance and luxury cars at prices that make sense. Whether you're chasing speed, comfort, or style — our competitive deals put your dream car within reach. Explore our collections and find the ride that defines you.</p>
        </div>
        <div className='left'>
          <FontAwesomeIcon icon={faMoneyCheck} size='2xl'/>
          <h4>Flexible Payment & Smart Financing</h4>
          <p>Drive your dream car your way. At PrimeDrive, we offer a wide range of secure payment options — from traditional methods and flexible car loans to modern solutions like digital wallets and cryptocurrency. Whether you’re buying outright or financing, we make it smooth, fast, and tailored to you.</p>
        </div>
      </div>
      <div className='ratings carssection'>
      <div className='fade-left'/>
      <div className='section'>
          {Clients.map(client=>(
            <RateCard client = {client} />
          ))}
      </div>
      <div className='fade-right'/>
      </div>
      <div >
        <div  className='newsLetter'>
          <h2 >Stay Updated</h2>
          <p >Subscribe to our newsletter for the latest cars, deals, and offers.</p>
          <form >
            <div >
              <input type="email"  placeholder="Enter your email" required />
            </div>
            <div >
              <button type="submit" >Subscribe</button>
            </div>
          </form>
          <p >We respect your privacy. No spam, ever.</p>
        </div>
      </div>
      <footer className="Footer">
          <img src="" alt="bg" />
      </footer>
    </div>
  )
}

export default Acceuil
