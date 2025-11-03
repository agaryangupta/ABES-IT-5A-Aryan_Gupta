import React from 'react'
import './card.css'
export const Card = (props) => {
  return (
    <div id="ary-card">
        <img src ={props.image} alt="" height={100} width={100}></img>
        <h1>{props.name} {props.rate}</h1>
        <h2> {props.age}</h2>
    </div>
  )
}
