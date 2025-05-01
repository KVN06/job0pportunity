import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecoverPassword.css';

const RecoverPassword = ({ onRecover }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onRecover(formData);
      setMessage('Se ha enviado el correo de recuperación');
    } catch (error) {
      setMessage('Error al procesar la solicitud');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="recover-password">
      <div className="recover-container">
        <div className="recover-card">
          <div className="recover-header">
            <img src="/logo.png" alt="Job Opportunity" className="recover-logo" />
            <h1>Recuperación De Cuenta</h1>
            <p className="recover-description">
              Ingresa tu correo electrónico y teléfono para recuperar tu cuenta
            </p>
          </div>
          {message && <p className="message">{message}</p>}
          <form className="recover-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número de teléfono"
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? 'Procesando...' : 'Solicitud de Recuperación'}
              </button>
            </div>
            <div className="recover-links">
              <div className="recover-divider">
                <span>o</span>
              </div>
              <Link to="/login" className="return-login">
                Volver a Inicio de Sesión
              </Link>
              <Link to="/registro" className="create-account">
                ¿No tienes cuenta? Regístrate
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;