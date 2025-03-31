import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Home.module.css';

import Section1 from '../../components/body/sections/Section1'; // Importando a seção 1
import Section2 from '../../components/body/sections/Section2'; // Importando a seção 2
import Section3 from '../../components/body/sections/Section3'; // Importando a seção 3

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.main}>
        <Section1 />
        <Section2 />
       <Section3 />
      </main>
    </div>
  );
}

export default Home;
