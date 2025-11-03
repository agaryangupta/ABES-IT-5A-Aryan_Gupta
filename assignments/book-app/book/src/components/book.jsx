import React from 'react';
import './book.css';

function Book({ title, price, img }) {
  return (
    <div className="book">
      <img src={img} alt={title} className="book-img" />
      <h2 className="book-title">Title: {title}</h2>
      <h3 className="book-price">Price: ₹{price}</h3>
    </div>
  );
}

export default Book;
