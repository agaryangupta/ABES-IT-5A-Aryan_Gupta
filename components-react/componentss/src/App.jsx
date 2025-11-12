import React, { useEffect, useState } from "react";
import { Fashion } from "./ccomponents/Fashion";
import "./ccomponents/Fashion.css";

export const App = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="page-title">Fashion Clothing</h1>

      <div className="fashion-grid">
        {Books.slice(0, 12).map((f, i) => (
          <Fashion key={i} {...f} />
        ))}
      </div>
    </div>
  );
};

export default App;
