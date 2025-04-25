import React from 'react'
import '../../App.css'
import Header from '../Header/Header'
import Hottest from '../Body/Hottest/Hottest'

function Acceuil() {
    const cars = [
        {id:'pgt3rs',carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche GT3 RS',description:'1 000 000 DH'},
        {id:'pgt3rs',carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/porsche_gt3_rs.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
      ]
    const cars1 = [
        {id:'pgt3rs',carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Porsche GT3 RS',description:'1 000 000 DH'},
        {id:'pgt3rs',carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
        {id:'pgt3rs',carmodel:'./cars/mercedes-benz_maybach2.glb',name:'Porsche GT3 RS',description:'Porsche GT3 RS'},
      ]
  return (
    <div>
      <Header/>
      <div className='sections'>
      <Hottest title='Hotest In Store' cars={cars}/>
      <Hottest title = 'Newest in Store' cars={cars1}/>
      </div>
      <div className='WhyUs'>
        <img src="../../section-3.jpg" alt="rs6" />
        <div className='left'>
          <img src="" alt="Quality Check" />
          <h4>Quality Check</h4>
          <p>We check the quality of each car before buying it and we take care of every detail the needs to be fixed</p>
        </div>
        <div className='right'>
          <img src="" alt="Best Prices" />
          <h4>Best Prices</h4>
          <p>We Provide the best prices in the market</p>
        </div>
        <div className='left'>
          <img src="" alt="Easy Financing" />
          <h4>Easy Financing</h4>
          <p>We provide multiple pricing methodes that make it easier for the client to purchase the way they feel more comfortable</p>
        </div>
      </div>
    </div>
  )
}

export default Acceuil
