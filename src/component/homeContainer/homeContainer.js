import React from 'react'
import Header from '../header/header'
import './homeContainer.css'
import NavbarComponent from './../navbarComponent/navbarComponent';

const HomeContainer = () => {
  return (
    <div className='homecontaiiner'>
        <Header/>
        <NavbarComponent/>
    </div>
  )
}

export default HomeContainer