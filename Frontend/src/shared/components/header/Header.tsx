import React from 'react';
import './Header.css'; // This will hold your styles

const Header = () => {
  return (
    <header className="main-header">
      <h1>Search the Professional</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/home">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
