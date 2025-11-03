import React, { useState } from 'react';
import './book.css';

function Book({ title, price, img }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="book">
      <img src={img} alt={title} className="book-img" />
      <h2 className="book-title">Title: {title}</h2>
      <h3 className="book-price">Price: ₹{price}</h3>

      <div className="counter">
        <button className="btn minus" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="btn plus" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Book;
