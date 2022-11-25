import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './component/header/header'
import Home from './component/home/home'
import Favourite from './component/favourite/favourite'
import Recent from './component/recent/recent'
import HomeContainer from './component/homeContainer/homeContainer'

const App = () => {
  return (
    
    <div className='app'>
      <HomeContainer/>
      {/* <Routes>
        <Route path='/home' element ={<Home/>} />
        <Route path='/favrt' element ={<Favourite/>} />
        <Route path='/recent' element ={<Recent/>} />
      </Routes> */}
    </div>

  )
}

export default App