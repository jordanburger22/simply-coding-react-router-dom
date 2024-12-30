import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </>
  )
}

export default App
