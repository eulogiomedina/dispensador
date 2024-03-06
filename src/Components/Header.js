// Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.title}>Planeta Mascotas</div>
      <nav style={styles.navLinks}>
        <Link to="/" style={styles.navLink}>Inicio</Link>
        <Link to="/productos" style={styles.navLink}>Productos</Link>
        <Link to="/login" style={styles.navLink}>Login</Link>
        <Link to="/registrarse" style={styles.navLink}>Registrarse</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2271B3', // El color de fondo del header
    color: 'white', // El color del texto
    padding: '10px 0', // Espaciado superior e inferior para el header
    textAlign: 'center', // Alinea el texto al centro
  },
  title: {
    fontSize: '24px', // Tamaño del texto para "Planeta Mascotas"
    fontWeight: 'bold', // Fuente en negrita para el título
  },
  navLinks: {
    display: 'flex', // Utiliza flexbox para alinear los enlaces
    justifyContent: 'center', // Centra los enlaces horizontalmente
    padding: '10px 0', // Espaciado superior e inferior para los enlaces
  },
  navLink: {
    color: 'black', // Color del texto de los enlaces
    margin: '0 15px', // Margen entre los enlaces
    textDecoration: 'none', // Elimina el subrayado de los enlaces
    fontSize: '20px', // Tamaño del texto para los enlaces
  }
};

export default Header;
