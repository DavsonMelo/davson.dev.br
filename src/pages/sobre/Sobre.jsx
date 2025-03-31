import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div>
      <Header />
      <main className={styles.mainSobre}>
        <h1>Sobre</h1>
        <p>Este é um site de exemplo para o curso de React do DevPleno.</p>
      </main>
    </div>
  );
}
export default Sobre;