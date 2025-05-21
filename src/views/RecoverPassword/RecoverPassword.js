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
            <img src="/images/proyecto2.jpeg" alt="Job Opportunity" className="recover-logo" />
            <h1>Recuperación De Cuenta</h1>
            <p className="recover-description">
              Ingresa tu correo electrónico y teléfono para recuperar tu cuenta
            </p>
          </div>
          {message && (
            <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
              <i className={`fas ${message.includes('Error') ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
              {message}
            </div>
          )}
          <form className="recover-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i>
                Correo Electrónico
              </label>
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
              <label htmlFor="phone">
                <i className="fas fa-phone"></i>
                Teléfono
              </label>
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
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Procesando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-key"></i>
                    Solicitar Recuperación
                  </>
                )}
              </button>
            </div>
            <div className="recover-links">
              <div className="recover-divider">
                <span>o</span>
              </div>
              <Link to="/login" className="return-login">
                <i className="fas fa-arrow-left"></i>
                Volver a Inicio de Sesión
              </Link>
              <Link to="/registro" className="create-account">
                <i className="fas fa-user-plus"></i>
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