import React from 'react';
import './Fashion.css';

export const Fashion = (props) => {
  return (
    <div id="card">
      <img src={props.image} alt={props.title} height={120} width={120} />
      <h4>{props.title}</h4>
      <p>${props.price}</p>
    </div>
  );
};
