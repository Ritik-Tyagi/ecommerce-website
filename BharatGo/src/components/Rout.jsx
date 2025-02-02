import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import CardDetail from './CardDetail'
import Card from './Card'
import Login from './Login'
import Signup from './Signup'
import Search from './Search'
function Rout() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage/>} /> 
        <Route path='/card' element={<CardDetail/>} /> 
        <Route path='/addCart' element={<Card/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/searchData' element={<Search/>} /> 


    </Routes>
    </div>
  )
}

export default Rout
