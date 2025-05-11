import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer'>
      <img src='/Footer.jpg' alt="taillights" className='bgImg'/>
      <div className='container-fluid footerContent'>
        <div className='Contact'>
        <h2>Contact Us</h2>
        <a href='www.google.pl/maps/' target='_blank'>1234 Prime Drive, City, State, 12345</a>
        <p>Email: <a href='mailto:contact@primedrive.com'>contact@primedrive.com</a></p>
        </div>
        <div className='AboutUs'>
          <h2>About Us</h2>
          <p>
          We’re passionate about delivering top-tier automotive solutions tailored to your needs. From luxury vehicles to affordable options, our goal is to make your car experience smooth, trustworthy, and satisfying. Driven by innovation, we combine quality service with customer care you can rely on.
          </p>
        </div>
        <div className='SocialMedia'>
          <h2>Follow Us</h2>
          <div className='container-fluid socials'>
          <a href='https://www.linkedin.com' target='_blank' ><FontAwesomeIcon className='socialsIcon' icon={faLinkedin} size='2xl'/></a>
          <a href='https://www.facebook.com' target='_blank' ><FontAwesomeIcon className='socialsIcon' icon={faFacebook} size='2xl'/></a>
          <a href='https://www.twitter.com' target='_blank' ><FontAwesomeIcon className='socialsIcon' icon={faTwitter} size='2xl'/></a>
          <a href='https://www.instagram.com' target='_blank' ><FontAwesomeIcon className='socialsIcon' icon={faInstagram} size='2xl'/></a>
          </div>
        </div>
      </div>
      <div className='Copyright'>
        <p>© {new Date().getFullYear()} PrimeDrive. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
