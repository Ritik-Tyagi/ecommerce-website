import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Rout from "./components/Rout"
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { ProductData } from './ContextApi'

function App() {
  const{isLoged}=useContext(ProductData)

  return (
    <>
    
    <Rout/>
    </>
  )
}

export default App
