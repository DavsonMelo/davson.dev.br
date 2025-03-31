import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldJSImage from '../../assets/images/HelloWorldJS.png';
import consoleJSImage from '../../assets/images/ConsoleHW-JS.png';

function JavascriptPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>JavaScript – A Linguagem da Web 🌐
        </h1>
        <h2>🔹 O que é JavaScript?
        </h2>
        <p>
          JavaScript (JS) é uma das linguagens de programação mais populares do mundo, sendo a espinha dorsal do desenvolvimento web. Criada em 1995 por Brendan Eich, inicialmente para rodar nos navegadores, hoje é usada tanto no frontend (React, Vue, Angular) quanto no backend (Node.js), além de aplicações móveis, desktop e até inteligência artificial.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Multiparadigma – Suporta programação funcional, orientada a objetos e baseada em eventos.<br />
          ✅ Interpretada – Executada diretamente pelo navegador ou pelo Node.js.<br />
          ✅ Tipagem Dinâmica – As variáveis podem mudar de tipo durante a execução.<br />
          ✅ Código Aberto – Pode ser usado e modificado livremente.<br />
          ✅ Alta compatibilidade – Funciona em praticamente qualquer plataforma.<br />
          ✅ Comunidade Ativa – Milhões de desenvolvedores e bibliotecas disponíveis.<br />
          ✅ Concorrência com Event Loop – Usa um modelo assíncrono baseado em eventos para melhor desempenho.<br />
          ✅ DOM Manipulation – Permite interagir com o Document Object Model (DOM) das páginas web.<br />
          ✅ Ecosistema Gigantesco – Milhões de bibliotecas disponíveis via npm.
        </p>
        <h2>🔹 Quem usa JavaScript?</h2>
        <p>
        Todas as grandes empresas de tecnologia, como Google, Facebook, Microsoft, Netflix, Uber e Amazon, utilizam JavaScript em suas aplicações. Além disso, a linguagem é amplamente adotada em startups, agências digitais e projetos de código aberto, sendo essencial para qualquer desenvolvedor web.
        </p>
        <h2>📌 Código "Hello, World!" em JavaScript</h2>
        <p>Aqui está um exemplo simples de um programa em Go que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldJSImage} alt="Código Hello World em JS" className={styles.codeImage} />
        <p>Este código:<br />
        🔹 console.log("Hello, World!"); – Exibe a mensagem no console do navegador ou do Node.js.<br />
        <h2>Agora, vamos gerar a imagem desse código! 🎨🖥️</h2>
        </p>
        <img src={consoleJSImage} alt="Console Hello World em JS" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default JavascriptPage;
