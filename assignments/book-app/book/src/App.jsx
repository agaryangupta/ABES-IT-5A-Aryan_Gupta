import React from 'react';
import Book from './components/Book.jsx';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Book title="Mathematics" price={290} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fPkksDWH5dH_UvyJUHbpjeS0MCNsYt12Rw&s" />
      <Book title="Physics" price={350} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73KQzR57BNq1Ppukns0OLyJltR2FZdIbBBQ&s" />
      <Book title="Chemistry" price={300} img="https://m.media-amazon.com/images/I/61-7pdgCElL._AC_UF1000,1000_QL80_.jpg" />
      <Book title="Biology" price={400} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GuQMyfOwzEPZv3Joib2xLpMr741nEsKILA&s" />
    </div>
  );
}

export default App;
