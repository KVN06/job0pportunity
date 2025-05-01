import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    cedula: '',
    fechaNacimiento: '',
    correoElectronico: '',
    telefono: '',
    direccion: '',
    contrasena: '',
    confirmarContrasena: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log(formData);
  };

  const renderProgressBar = () => {
    const progress = ((step - 1) / 3) * 100;
    return (
      <div className="progress-container">
        <div className="progress-text">
          Paso {step} de 3: {getStepTitle()}
        </div>
        <div className="progress-bar">
          <div className="progress-filled" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-percentage">{progress.toFixed(1)}%</div>
      </div>
    );
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return 'Información Personal';
      case 2:
        return 'Información de Contacto';
      case 3:
        return 'Credenciales';
      default:
        return '';
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="form-group">
              <label htmlFor="nombreCompleto">Nombre Completo</label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cedula">Cédula</label>
              <input
                type="text"
                id="cedula"
                name="cedula"
                value={formData.cedula}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                placeholder="dd/mm/aaaa"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="form-group">
              <label htmlFor="correoElectronico">Correo Electrónico</label>
              <input
                type="email"
                id="correoElectronico"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="form-group">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmarContrasena"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleChange}
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <img src="/logo.png" alt="Job Opportunity" className="register-logo" />
            <h1>Registro de Usuario</h1>
          </div>
          {renderProgressBar()}
          <form className="register-form" onSubmit={handleSubmit}>
            {renderStep()}
            <div className="form-actions">
              {step > 1 && (
                <button type="button" className="btn-secondary" onClick={prevStep}>
                  Anterior
                </button>
              )}
              {step < 3 ? (
                <button type="button" className="btn-primary" onClick={nextStep}>
                  Siguiente
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  Registrarse
                </button>
              )}
            </div>
            <div className="register-links">
              <p>¿Ya tienes una cuenta?</p>
              <Link to="/login" className="login-link">
                Iniciar Sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;