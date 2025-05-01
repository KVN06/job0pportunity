import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img src="/logo.png" alt="Job Opportunity" className="logo-image" />
              <span className="logo-text">JOB OPPORTUNITY</span>
            </Link>
          </div>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/foros" className="nav-link">Foros/Capacitaciones</Link>
            <Link to="/clasificados" className="nav-link">Clasificados</Link>
            <Link to="/faqs" className="nav-link">FAQs</Link>
          </nav>
          <div className="nav-right">
            <div className="auth-buttons">
              <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;