import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Contato.module.css';

function Contato() {
  return (
    <div>
      <Header />
      <main className={styles.mainContato}>
        <h1>Contato</h1>
        <p>Este é um site de exemplo para o curso de React do DevPleno.</p>
      </main>
    </div>
  );
}
export default Contato;