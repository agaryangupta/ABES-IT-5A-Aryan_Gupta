import React from 'react'
import './Fashion.css'

export const Fashion = (props) => {
  return (
    <div>
        <div>
            <h1>Fashion Society ABES</h1>
        </div>
        <div>
            <img src={props.image} alt="" height = {80} width={80} />
            <h4>Title:{props.title}</h4>
            <h4>Price:{props.price}</h4>
        </div>
    </div>
  )
}
