import React from 'react'
import { Card } from './components/Card'
import  Navbar  from './components/Navbar'

import './app.css'
const App = () => {
  return (
    <>
    <Navbar name={"Header"}/>
    <div id ="modify">
      <Card name={"Pizza"}  rate={"100"} image={"https://rukminim2.flixcart.com/image/480/480/kxgfzbk0/wall-decoration/d/q/e/food-pizza-wallpaper-paper-poster-1-vp-221221-617-poster-smoky-original-imag9wjrxfzzhrpd.jpeg?q=90"} />
      <Card name={"Burger"}  rate={"80"} image={"https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png"}/>
      <Card name={"Pasta"} rate={"90"} image={"https://www.spiceupthecurry.com/wp-content/uploads/2023/02/white-sauce-pasta-2.jpg"}/>
    </div>
    <Navbar name={"Footer"}/>
    </>
  )
}

export default App
