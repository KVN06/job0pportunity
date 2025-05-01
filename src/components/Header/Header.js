import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src="/logo.png" alt="Job Opportunity" className="logo-image" />
              <span className="logo-text">JOB OPPORTUNITY</span>
            </a>
          </div>
          <nav className="nav-menu">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/foros" className="nav-link">Foros/Capacitaciones</a>
            <a href="/clasificados" className="nav-link">Clasificados</a>
            <a href="/faqs" className="nav-link">FAQs</a>
          </nav>
          <div className="nav-right">
            <div className="auth-buttons">
              <a href="/login" className="nav-link">Mi Cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;