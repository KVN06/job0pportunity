import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src="/logo.png" alt="Job Opportunity" className="login-logo" />
            <h1>Iniciar Sesión</h1>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Iniciar Sesión
              </button>
            </div>
            <div className="login-links">
              <Link to="/recuperar-contrasena" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </Link>
              <Link to="/registro" className="register-link">
                ¿No tienes cuenta? Regístrate
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;