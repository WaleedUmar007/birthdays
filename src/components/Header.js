import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <i className="fas fa-birthday-cake"></i>
          <span>Birthday Database</span>
        </div>
        <nav className="nav-menu">
          <a href="#dashboard" className="nav-link">
            <i className="fas fa-home"></i>
            Dashboard
          </a>
          <a href="#events" className="nav-link">
            <i className="fas fa-calendar"></i>
            Events
          </a>
          <a href="#settings" className="nav-link">
            <i className="fas fa-cog"></i>
            Settings
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 