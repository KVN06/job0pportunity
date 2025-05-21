import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ featuredJobs = [], categories = [], stats = {}, isLoading = false }) => {
  // Estado para manejar favoritos
  const [favorites, setFavorites] = useState([]);
  // Estado para formulario
  const [formData, setFormData] = useState({
    searchQuery: '',
    name: '',
    yearsOfExperience: '',
    photoUrl: ''
  });

  // Efecto para cargar datos iniciales
  useEffect(() => {
    // Cargar favoritos del localStorage
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Función para manejar favoritos
  const toggleFavorite = (jobId) => {
    const newFavorites = favorites.includes(jobId)
      ? favorites.filter(id => id !== jobId)
      : [...favorites, jobId];
    
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para verificar si la URL es válida
  const isValidImageUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Encuentra tu próxima<br />oportunidad laboral</h1>
          <p>Conectamos talento con las mejores empresas</p>
          <div className="search-container">
            <div className="search-form">
              <input
                type="text"
                placeholder="Buscar empleos..."
                name="searchQuery"
                value={formData.searchQuery}
                onChange={handleChange}
                className="search-input"
              />
              <input
                type="text"
                placeholder="Nombre completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Años de experiencia"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="form-input"
                min="0"
              />
              <input
                type="url"
                placeholder="URL de tu foto"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            {/* Preview Section */}
            {(formData.name || formData.yearsOfExperience || formData.photoUrl) && (
              <div className="preview-section">
                <h3>Vista Previa del Perfil</h3>
                <div className="preview-content">
                  {isValidImageUrl(formData.photoUrl) && (
                    <div className="preview-image">
                      <img src={formData.photoUrl} alt="Foto de perfil" />
                    </div>
                  )}
                  <div className="preview-info">
                    {formData.name && <p className="preview-name">{formData.name}</p>}
                    {formData.yearsOfExperience && (
                      <p className="preview-experience">
                        {formData.yearsOfExperience} años de experiencia
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
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
          {isLoading ? (
            <p>Cargando estadísticas...</p>
          ) : (
            <>
              <div className="stat-card">
                <h3 className="stat-number">{stats.jobs || '5,000+'}
                </h3>
                <p className="stat-label">Empleos Disponibles</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">{stats.companies || '2,500+'}</h3>
                <p className="stat-label">Empresas Registradas</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">{stats.candidates || '10,000+'}</h3>
                <p className="stat-label">Candidatos Colocados</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="featured-jobs container">
        <div className="section-header">
          <h2>Empleos Destacados</h2>
          <a href="/empleos" className="view-all">Ver todos →</a>
        </div>
        <div className="jobs-grid">
          {isLoading ? (
            <p>Cargando empleos...</p>
          ) : (
            featuredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title-container">
                    <h3>{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <button 
                    className="favorite-btn"
                    onClick={() => toggleFavorite(job.id)}
                  >
                    <i className={`${favorites.includes(job.id) ? 'fas' : 'far'} fa-star`}></i>
                  </button>
                </div>
                <div className="job-details">
                  <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                  <span><i className="fas fa-clock"></i> {job.type}</span>
                </div>
                <Link to={`/empleo/${job.id}`} className="btn-details">Ver detalles →</Link>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Categorías Populares</h2>
          </div>
          <div className="categories-grid">
            {isLoading ? (
              <p>Cargando categorías...</p>
            ) : (
              categories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.jobCount}+ empleos</p>
                  </div>
                </div>
              ))
            )}
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