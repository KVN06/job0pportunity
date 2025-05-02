import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import RecoverPassword from './views/RecoverPassword/RecoverPassword';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState({});

  // Configuración del logo
  const logo = '/images/proyecto.jpeg';

  // Simular carga de datos iniciales
  useEffect(() => {
    const loadInitialData = async () => {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFeaturedJobs([
        {
          id: 1,
          title: 'Desarrollador Frontend',
          company: 'Tech Solutions',
          location: 'Remoto',
          type: 'Tiempo completo'
        },
        {
          id: 2,
          title: 'Diseñador UX/UI',
          company: 'Creative Agency',
          location: 'Híbrido',
          type: 'Tiempo completo'
        },
        {
          id: 3,
          title: 'Project Manager',
          company: 'Global Systems',
          location: 'Presencial',
          type: 'Tiempo completo'
        }
      ]);

      setCategories([
        {
          id: 1,
          name: 'Tecnología',
          icon: 'fas fa-laptop-code',
          jobCount: 1200
        },
        {
          id: 2,
          name: 'Marketing',
          icon: 'fas fa-chart-line',
          jobCount: 500
        },
        {
          id: 3,
          name: 'Diseño',
          icon: 'fas fa-pencil-ruler',
          jobCount: 600
        },
        {
          id: 4,
          name: 'Ventas',
          icon: 'fas fa-handshake',
          jobCount: 800
        }
      ]);

      setStats({
        jobs: '5,000+',
        companies: '2,500+',
        candidates: '10,000+'
      });

      setIsLoading(false);
    };

    loadInitialData();
  }, []);

  const handleLogin = async (formData) => {
    // Aquí iría la lógica de autenticación
    console.log('Intentando iniciar sesión con:', formData);
    // Simular una llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleRegister = async (formData) => {
    // Aquí iría la lógica de registro
    console.log('Registrando usuario:', formData);
    // Simular una llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleRecoverPassword = async (formData) => {
    // Aquí iría la lógica de recuperación de contraseña
    console.log('Recuperando contraseña para:', formData);
    // Simular una llamada API
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <Router>
      <div className="App">
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={
            <Home 
              featuredJobs={featuredJobs}
              categories={categories}
              stats={stats}
              isLoading={isLoading}
            />
          } />
          <Route path="/login" element={<Login onSubmit={handleLogin} />} />
          <Route path="/registro" element={<Register onRegister={handleRegister} />} />
          <Route path="/recuperar-contrasena" element={<RecoverPassword onRecover={handleRecoverPassword} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
