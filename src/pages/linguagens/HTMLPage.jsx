import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldHTMLImage from '../../assets/images/HelloWorldHTML.png'; // Imagem do código Hello World em HTML

function HTMLPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.linguagem}>
                <h1>HTML – A Base da Web 🌐</h1>
                <h2>O que é HTML?</h2>
                <p>
                    HTML (HyperText Markup Language) é a linguagem padrão utilizada para criar páginas na web. Ele define a estrutura do conteúdo de um site através de elementos como títulos, parágrafos, imagens e links.
                </p>
                <h2>Características principais</h2>
                <p>
                    ✅ Estrutura hierárquica com tags<br />
                    ✅ Semântica para descrever o conteúdo<br />
                    ✅ Suporte a multimídia (imagens, vídeos, áudio)<br />
                    ✅ Links e navegação entre páginas<br />
                    ✅ Formulários para interação do usuário<br />
                    ✅ Acessibilidade e SEO (Search Engine Optimization)<br />
                    ✅ Compatível com todos os navegadores<br />
                </p>
                <h2>Quem usa HTML?</h2>
                <p>
                    Todos os sites e aplicações web do mundo utilizam HTML, desde pequenas páginas pessoais até gigantes como Google, Facebook, Amazon e YouTube.
                </p>
                <h2>Código "Hello, World!" em HTML</h2>
                <p>
                    Aqui está um exemplo simples de um documento HTML que exibe "Hello, World!" no navegador:
                </p>
                <img src={helloWorldHTMLImage} alt="Código Hello World em HTML" className={styles.codeImage} />

            </main>
        </div>
    );
}

export default HTMLPage;