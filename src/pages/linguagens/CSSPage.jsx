import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
// import helloWorldCSSImage from '../../assets/images/HelloWorldCSS.png';


function CSSPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.linguagem}>
                
            </main>
        </div>
    );
}

export default CSSPage;
