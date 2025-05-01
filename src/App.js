import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import RecoverPassword from './views/RecoverPassword/RecoverPassword';

function App() {
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
