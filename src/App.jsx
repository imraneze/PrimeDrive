import React from 'react';
import './App.css'
import Home from './components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './components/Pages/Inventory';
import Financing from './components/Pages/Financing';
import SellYourCar from './components/Pages/SellYourCar';
import AboutUs from './components/Pages/AboutUs';
import LogIn from './components/Pages/LogIn';
import SignUp from './components/Pages/SignUp';
import TestDrive from './components/Pages/TestDrive';
import GetQuote from './components/Pages/GetQuote';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Inventory" element={<Inventory/>} />
          <Route path="/Financing" element={<Financing/>} />
          <Route path='/Sell_Your_Car' element={<SellYourCar/>} />
          <Route path='/About_Us' element={<AboutUs/>} />
          <Route path='/Log_IN' element={<LogIn/>} />
          <Route path='/Sign_Up' element={<SignUp/>} />
          <Route path='/Schedule_a_Test_Drive' element={<TestDrive/>} />
          <Route path='/Get_a_Quote' element={<GetQuote/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
