import React from 'react'
import { Card } from './ccomponents/Card'
import  Navbar  from './ccomponents/Navbar'

import './app.css'
const App = () => {
  return (
    <>
    <Navbar/>
    <div id ="modify">
      <Card name={"My"}/>
      <Card name={"name"}/>
      <Card name={"is"}/>
      <Card name={"Aryan"}/>
      <Card name={"Gupta"}/>
    </div>
    </>
  )
}

export default App
