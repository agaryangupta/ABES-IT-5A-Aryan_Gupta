import React from 'react'
import './card.css'
export const Card = (props) => {
  return (
    <div id="ary-card">
        <img src ="https://wallpapersok.com/images/high/shiro-and-shin-chan-iphone-ao1ij09557z5nxt2.jpg" alt="" height={100} width={100}></img>
        <h1>{props.name}</h1>
        <h2> {props.age}</h2>
    </div>
  )
}
