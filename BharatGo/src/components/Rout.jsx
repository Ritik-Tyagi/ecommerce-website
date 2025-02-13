import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import CardDetail from './CardDetail'
import Card from './Card'
import Login from './Login'
import Signup from './Signup'
import Search from './Search'
import Home from '../pages/Home'
import Dashbord from './Dashbord'
function Rout() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/homepage' element={<HomePage/>} /> 
        <Route path='/card' element={<CardDetail/>} /> 
        <Route path='/addCart' element={<Card/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/searchData' element={<Search/>} /> 
        <Route path='/dashbord' element={<Dashbord/>} /> 


    </Routes>
    </div>
  )
}

export default Rout
