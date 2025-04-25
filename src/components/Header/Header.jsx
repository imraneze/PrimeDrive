import React from 'react'
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
                    {/* <div className='bgli'></div> */}
                    Home
                    <hr />
                </li>
                <li>
                    {/* <div className='bgli'></div> */}
                    <div class="dropdown">
                        <button class="dropbtn">Inventory <span className='drpdownarrow'>▾</span></button>
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
                    {/* <div className='bgli'></div> */}
                    Financing
                    <hr />
                </li>
                <li>
                    {/* <div className='bgli'></div> */}
                    Sell Your Car
                    <hr />
                </li>
                <li>
                    {/* <div className='bgli'></div> */}
                    About Us
                    <hr />
                </li>
                <li>
                    {/* <div className='bgli'></div> */}
                    Contact
                    <hr />
                </li>
            </ul>
            <div className='quote'>
                <button class="dropbtn"><h3>Get Started <span className='drpdownarrow'>▾</span></h3></button>
                <div class="dropdown-content">
                    <a href="#">Log In</a>
                    <a href="#">Sign Up</a>
                    <a href="#">Schedule a Test Drive</a>
                    <a href="#">Get a Quote</a>
                </div>
            </div>
        </div>
        <div className='headerquote'>
            <h1 className='hq'>Engineered for the Bold.</h1>
            <span class="subline">Drive it. Own it. Live it.</span>
        </div>
        <div className='morebtn'><button>Explore More</button></div>
    </div>
  )
}

export default Header
