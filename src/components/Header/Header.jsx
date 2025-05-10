import React from 'react'
import './Header.css'
import { useState } from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <>
    <img src="/header.jpg" alt="Logo" className='header-img'/>
    <div className='mHeader'>
        
        <Navbar/>
        <div className='headerquote'>
            <h1 className='hq'>Engineered for the Bold.</h1>
            <span className="subline">Drive it. Own it. Live it.</span>
        </div>
        <div className='morebtn'><a href="#more"><button>Explore More</button></a></div>
    </div>
    </>
  )
}

export default Header
