import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Book from './components/Book.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
      <Book 
        title="Mathematics" 
        price={290} 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fPkksDWH5dH_UvyJUHbpjeS0MCNsYt12Rw&s" 
      />
      <Book 
        title="Physics" 
        price={350} 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73KQzR57BNq1Ppukns0OLyJltR2FZdIbBBQ&s" 
      />
      <Book 
        title="Chemistry" 
        price={300} 
        img="https://m.media-amazon.com/images/I/61-7pdgCElL._AC_UF1000,1000_QL80_.jpg" 
      />
      <Book 
        title="Biology" 
        price={400} 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GuQMyfOwzEPZv3Joib2xLpMr741nEsKILA&s" 
      />
    </div>
  );
}

export default App;
