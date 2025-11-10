import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h2>Home Page</h2>;
  }

function About() {
    return <h2>About Page</h2>;
  }

export const Link1 = () => {
  return (
    <div>
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>   
        </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/about" element = {<About/>}></Route>
      </Routes> 
    </div> 
  )
}
