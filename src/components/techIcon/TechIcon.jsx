import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TechIcon.module.css';

function TechIcon({ src, alt, name, link }) {
  return (
    <Link to={link} className={styles.techIcon}>
      <img src={src} alt={alt} className={styles.icon} />
      <p className={styles.name}>{name}</p> {/* Nome abaixo do ícone */}    
    </Link>
  );
}

export default TechIcon;
