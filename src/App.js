// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import Producto from './Components/Producto';
import Login from './Components/Login';
import Formulario from './Components/Formulario';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Producto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Formulario />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
