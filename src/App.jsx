import React,{useState,useEffect, use} from 'react';
import './App.css'
import Home from './components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './components/Pages/Inventory';
import Financing from './components/Pages/Financing';
import SellYourCar from './components/Pages/SellYourCar';
import LogIn from './components/Pages/LogIn';
import SignUp from './components/Pages/SignUp';
import TestDrive from './components/Pages/TestDrive';
import GetQuote from './components/Pages/GetQuote';
import CarPage from './components/Pages/CarPage';
import CarsData from './components/CarsData';


function App() {
  const [cars, setCars] = useState([CarsData])
  useEffect(() => {
    setCars(CarsData)
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Inventory" element={<Inventory/>} />
          <Route path="/Financing" element={<Financing/>} />
          <Route path='/Sell_Your_Car' element={<SellYourCar/>} />
          <Route path='/Log_In' element={<LogIn/>} />
          <Route path='/Sign_Up' element={<SignUp/>} />
          <Route path='/Schedule_a_Test_Drive' element={<TestDrive/>} />
          <Route path='/Get_a_Quote' element={<GetQuote/>} />
          {cars.map((car) => (
            <Route key={car.id} path={`/Inventory/${car.name}`} element={<CarPage car={car}/>} />
          ))}
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
