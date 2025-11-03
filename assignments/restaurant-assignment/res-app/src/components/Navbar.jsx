import React from 'react'
import './navbar.css'

function Navbar(props) {
  return (
    <div>
      <div>
        <ul id='nav'>
            <li>Home</li>
            <li>{props.name} {props.age} {props.img}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar