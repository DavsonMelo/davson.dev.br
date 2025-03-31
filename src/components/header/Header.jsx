import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Estilos específicos do header
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa"; 

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setMenuAberto((prev) => !prev);
  };

  // Fecha o menu automaticamente após 5 segundos
  useEffect(() => {
    let timer;
    if (menuAberto) {
      timer = setTimeout(() => {
        setMenuAberto(false);
      }, 5000);
    }
    return () => clearTimeout(timer); // Limpa o timer quando o menu fecha
  }, [menuAberto]);

    return (
      <header className={styles.header}>
        <nav className={styles.logoContainer}>
          <Link to="/">
            <img src="./images/logotipo-definitivo.png" className={styles.logoHeader} alt="logo" />
          </Link>   
          <h1 className={styles.logoTitulo}>Web Developer</h1>       
        </nav>
        {/* Botão do menu hambúrguer */}
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
        {/* Menu responsivo */}
      <ul className={`${styles.menu} ${menuAberto ? styles.active : ""}`}>
        <li><Link to="/" onClick={toggleMenu}><FaHome /> Home</Link></li>
        <li><Link to="/sobre" onClick={toggleMenu}><FaInfoCircle /> Sobre</Link></li>
        <li><Link to="/contato" onClick={toggleMenu}><FaEnvelope /> Contato</Link></li>
      </ul>
      </header>
    );
  }
  
  export default Header;