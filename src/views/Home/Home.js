import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Encuentra tu próxima<br />oportunidad laboral</h1>
          <p>Conectamos talento con las mejores empresas</p>
          <div className="button-group">
            <button className="btn btn-primary">Buscar Empleos</button>
            <Link to="/registro" className="btn btn-secondary">Crear Cuenta</Link>
            <Link to="/login" className="btn btn-secondary">Iniciar Sesión</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">5,000+</h3>
            <p className="stat-label">Empleos Disponibles</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">2,500+</h3>
            <p className="stat-label">Empresas Registradas</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10,000+</h3>
            <p className="stat-label">Candidatos Colocados</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs container">
        <div className="section-header">
          <h2>Empleos Destacados</h2>
          <a href="/empleos" className="view-all">Ver todos →</a>
        </div>
        <div className="jobs-grid">
          <div className="job-card">
            <div className="job-header">
              <div className="job-title-container">
                <h3>Desarrollador Frontend</h3>
                <p className="company-name">Tech Solutions</p>
              </div>
              <button className="favorite-btn">
                <i className="far fa-star"></i>
              </button>
            </div>
            <div className="job-details">
              <span><i className="fas fa-map-marker-alt"></i> Remoto</span>
              <span><i className="fas fa-clock"></i> Tiempo completo</span>
            </div>
            <a href="/empleo/1" className="btn-details">Ver detalles →</a>
          </div>

          <div className="job-card">
            <div className="job-header">
              <div className="job-title-container">
                <h3>Diseñador UX/UI</h3>
                <p className="company-name">Creative Agency</p>
              </div>
              <button className="favorite-btn">
                <i className="far fa-star"></i>
              </button>
            </div>
            <div className="job-details">
              <span><i className="fas fa-map-marker-alt"></i> Híbrido</span>
              <span><i className="fas fa-clock"></i> Tiempo completo</span>
            </div>
            <a href="/empleo/2" className="btn-details">Ver detalles →</a>
          </div>

          <div className="job-card">
            <div className="job-header">
              <div className="job-title-container">
                <h3>Project Manager</h3>
                <p className="company-name">Global Systems</p>
              </div>
              <button className="favorite-btn">
                <i className="far fa-star"></i>
              </button>
            </div>
            <div className="job-details">
              <span><i className="fas fa-map-marker-alt"></i> Presencial</span>
              <span><i className="fas fa-clock"></i> Tiempo completo</span>
            </div>
            <a href="/empleo/3" className="btn-details">Ver detalles →</a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Categorías Populares</h2>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="category-info">
                <h3>Tecnología</h3>
                <p>1,200+ empleos</p>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="category-info">
                <h3>Marketing</h3>
                <p>500+ empleos</p>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <div className="category-info">
                <h3>Diseño</h3>
                <p>600+ empleos</p>
              </div>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="category-info">
                <h3>Ventas</h3>
                <p>800+ empleos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Foros de Discusión</h3>
              <p>Conéctate con otros profesionales</p>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Capacitaciones</h3>
              <p>Mejora tus habilidades</p>
            </div>
            <div className="resource-card">
              <div className="resource-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3>Blog</h3>
              <p>Consejos y tendencias</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;