import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { useState } from 'react'

function Header() {
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
    <div className='Header'>
        <img src="/header.jpg" alt="Logo" />
        <div className={navStyle == 'top'? 'Navbar': (navStyle == 'MidTop')? 'Navbar NavMid':(navStyle == 'MidBottom')?'Navbar NavMid NavBottom':'Navbar NavBottom'}>
            <div className='Logo'>
                <a href="#"><h1>PrimeDrive</h1></a>
            </div>
            <ul className='List'>
                <li>
                   <Link to="/">Home</Link>
                    <hr />
                </li>
                <li>
                    <div class="dropdown">
                        <button class="dropbtn"><Link to="/Inventory">Inventory</Link> <span className='drpdownarrow'>▾</span></button>
                        <div class="dropdown-content">
                            <div>
                            <h4>Porsche</h4>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                            <div>
                            <h4>Mercedes</h4>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                            <div>
                            <h4>Bugati</h4>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            </div>
                        </div>
                        <hr />
                    </div>
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
                <Link to="/About_Us">About Us</Link>
                    <hr />
                </li>
            </ul>
            <div className='quote'>
                <button class="dropbtn"><h3>Get Started <span className='drpdownarrow'>▾</span></h3></button>
                <div class="dropdown-content">
                    <Link to="/Log_IN">Log In</Link>
                    <Link to="/Sign_Up">Sign Up</Link>
                    <Link to="/Schedule_a_Test_Drive">Schedule a Test Drive</Link>
                    <Link to="/Get_a_Quote">Get a Quote</Link>
                </div>
            </div>
        </div>
        <div className='headerquote'>
            <h1 className='hq'>Engineered for the Bold.</h1>
            <span class="subline">Drive it. Own it. Live it.</span>
        </div>
        <div className='morebtn'><a href="#more"><button>Explore More</button></a></div>
    </div>
  )
}

export default Header
