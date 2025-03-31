import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldRubyImage from '../../assets/images/HelloWorldRuby.png';
import helloWorldRubyCodeImage from '../../assets/images/consoleHW-RB.png';


function RubyPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          Ruby – A Linguagem Elegante e Produtiva 💎
        </h1>
        <h2>🔹 O que é Ruby?</h2>
        <p>
          Ruby é uma linguagem de programação dinâmica e de alto nível criada por Yukihiro “Matz” Matsumoto em 1995. É famosa por sua simplicidade, produtividade e sintaxe elegante, sendo amplamente utilizada no desenvolvimento web com o framework Ruby on Rails. Ruby é uma linguagem orientada a objetos, o que significa que tudo em Ruby é um objeto, incluindo números, strings e classes. Isso torna a linguagem muito flexível e poderosa, permitindo que os desenvolvedores criem soluções elegantes e eficientes para uma variedade de problemas.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Sintaxe Simples e Intuitiva – Código mais próximo da linguagem humana.<br />
          ✅ Orientada a Objetos – Tudo em Ruby é um objeto.<br />
          ✅ Dinamicamente Tipada – Sem necessidade de declarar tipos.<br />
          ✅ Altamente Flexível – Permite modificar classes e métodos em tempo de execução.<br />
          ✅ Framework Ruby on Rails – Potente para desenvolvimento web ágil.<br />
          ✅ Grande Comunidade e Ecossistema – Muitas gems (bibliotecas) disponíveis.
        </p>
        <h2>🔹 Quem usa Ruby?</h2>
        <p>
          Empresas como GitHub, Airbnb, Shopify, Basecamp, Twitter (no início) e SoundCloud usam Ruby e Ruby on Rails para desenvolvimento web. Ruby é uma escolha popular entre startups e empresas que buscam desenvolver aplicações web rapidamente, devido à sua sintaxe limpa e ao poderoso framework Ruby on Rails.
        </p>
        <h2>📌 Código "Hello, World!" em Ruby</h2>
        <p>
          Aqui está um exemplo simples de um programa em Ruby que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldRubyImage} alt="Hello World em Ruby" className={styles.codeImage} />
        <p>
          Este código:<br />
          🔹 console.log("Hello, World!"); – Exibe a mensagem no console do navegador ou do Node.js.
          <br />
          Agora, vamos gerar a imagem desse código! 🎨🖥️
        </p>
        <img src={helloWorldRubyCodeImage} alt="Código Hello World em Ruby" className={styles.codeImage} />
        <p>
          Este código é extremamente simples e direto, demonstrando a facilidade de uso do Ruby.
        </p>
      </main>
    </div>
  );
}

export default RubyPage;
