import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h2 className="footer-title">Job Opportunity</h2>
            <p className="footer-text">
              Tu plataforma para encontrar empleo y recursos que te ayudarán a mejorar tu perfil laboral.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-subtitle">Enlaces Importantes</h3>
            <ul className="footer-links">
              <li><a href="/testimonios" className="footer-link">Testimonios</a></li>
              <li><a href="/soporte" className="footer-link">Soporte</a></li>
              <li><a href="/contacto" className="footer-link">Contacto</a></li>
              <li><a href="/acerca-de" className="footer-link">Acerca de</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Recursos</h3>
            <ul className="footer-links">
              <li><a href="/agregar-carta" className="footer-link">Agregar Carta</a></li>
              <li><a href="/ultimas-noticias" className="footer-link">Últimas Noticias</a></li>
              <li><a href="/preguntas-frecuentes" className="footer-link">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div className="footer-section social-section">
            <h3 className="footer-subtitle">Síguenos</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 Job Opportunity. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="/privacidad" className="legal-link">Política de Privacidad</a>
            <a href="/terminos" className="legal-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;