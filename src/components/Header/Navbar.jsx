import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import {MakeOptions} from '../CarsData';

function Navbar() {
    const [navStyle, setNavStyle] = useState('top')
    const changeStyle = () => {
        if (window.scrollY >= window.innerHeight*0.83) {
            setNavStyle('bottom')
        } else if (window.scrollY >= window.innerHeight*0.5){
            setNavStyle('MidBottom')
        } else if(window.scrollY>=window.innerHeight*0.2){
            setNavStyle('MidTop')
        } else {
            setNavStyle('top')
        } 
    }
    window.addEventListener('scroll', changeStyle);
  return (
    <>
      <div className="container-fluid w-100" style={{height:"13vh"}}></div>
      <nav className="navbar navbar-expand-lg ">
        <div className={`Navbar container-fluid ${navStyle == 'top'? '': (navStyle == 'MidTop')? 'NavMid':(navStyle == 'MidBottom')?'NavMid NavBottom':'NavBottom'}`}>
            <Link className='Logo navbar-brand' to="/"><h1>PrimeDrive</h1></Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className='adaptive-navbar'></div>
            <ul className='mList navbar-nav'>
                <li>
                   <Link to="/">Home</Link>
                    <hr />
                </li>
                <li className='dropdown'>
                    <div className="dropdown">
                        <button className="dropbtn"><Link to="/Inventory">Inventory</Link> <span className='drpdownarrow'>▾</span></button>
                        <div className="dropdown-content">
                            <div className="row row-cols-2">
                                {MakeOptions.map((make) => (
                                    <div className="col" key={make}>
                                        <Link to={`/Inventory`}>{make}</Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <hr />
                </li>
                <li>
                    <Link to="/Financing">Financing</Link>
                    <hr />
                </li>
                <li>
                <Link to="/Sell_Your_Car">Sell Your Car</Link>
                    <hr />
                </li>
                <li>
                <Link to="/Get_a_Quote">Get a Quote</Link>
                    <hr />
                </li>
            </ul>
            <div className='quote'>
                <button className="dropbtn"><h3>Get Started <span className='drpdownarrow'>▾</span></h3></button>
                <div className="dropdown-content">
                    <Link to="/Log_In">Log In</Link>
                    <Link to="/Sign_Up">Sign Up</Link>
                    <Link to="/Schedule_a_Test_Drive">Schedule a Test Drive</Link>
                </div>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
