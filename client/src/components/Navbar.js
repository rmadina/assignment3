import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div>FlashCard App</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/flashcards">FlashCards</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
