import React from 'react'
import { Card } from './ccomponents/Card'
import  Navbar  from './ccomponents/Navbar'

import './app.css'
const App = () => {
  return (
    <>
    <Navbar/>
    <div id ="modify">
      <Card name={"My"}  age={"(1)"}/>
      <Card name={"name"}  age={"."}/>
      <Card name={"is"}  age={"."}/>
      <Card name={"Aryan"}  age={"."}/>
      <Card name={"Gupta"} age={"(20)"}/>
    </div>
    </>
  )
}

export default App
