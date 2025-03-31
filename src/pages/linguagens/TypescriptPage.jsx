import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldTSImage from '../../assets/images/HelloWorldTS.png';
import helloWorldTSCodeImage from '../../assets/images/consoleHW-TS.png';

function TypescriptPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          TypeScript – JavaScript com Superpoderes 🔷
        </h1>
        <h2>
          🔹 O que é TypeScript?
        </h2>
        <p>
          TypeScript (TS) é uma linguagem criada pela Microsoft em 2012, baseada no JavaScript, mas adicionando tipagem estática e recursos avançados. Ele é amplamente usado para desenvolvimento web moderno, sendo a escolha principal para grandes aplicações frontend e backend com React, Angular, Vue e Node.js. TypeScript é conhecido por sua segurança, produtividade e escalabilidade, permitindo aos desenvolvedores escrever código mais robusto e confiável.
        </p>
        <h2>
          🔹 Características principais
        </h2>
        <p>
          ✅ Tipagem Estática – Adiciona tipos para variáveis, parâmetros e retornos de funções.<br />
          ✅ Inferência de Tipos – Detecta automaticamente o tipo de variáveis e expressões.<br />
          ✅ Classes e Interfaces – Suporta programação orientada a objetos com classes e interfaces.<br />
          ✅ Decorators – Adiciona metadados e funcionalidades a classes e métodos.<br />
          ✅ Generics – Permite criar funções e classes com tipos genéricos.<br />
          ✅ Union Types – Combina tipos para criar tipos mais complexos.<br />
          ✅ Enums – Define um conjunto de constantes nomeadas.<br />
          ✅ Async/Await – Simplifica o uso de Promises para operações assíncronas.<br />
          ✅ Módulos – Organiza o código em módulos reutilizáveis.<br />
          ✅ Superset de JavaScript – Todo código JavaScript é código TypeScript válido.<br />
          ✅ Tipagem Estática – Menos erros em tempo de execução e código mais seguro.<br />
          ✅ Melhor IntelliSense – Autocompletar e sugestões inteligentes no VS Code.<br />
          ✅ Compilado para JavaScript – Funciona em qualquer ambiente JS.<br />
          ✅ Suporte a Orientação a Objetos – Classes, interfaces, herança e mais.<br />
          ✅ Amplamente usado em grandes projetos – Empresas como Google, Microsoft e Meta adotam
        </p>
        <h2>
          🔹 Quem usa TypeScript?
        </h2>
        <p>
        Grandes empresas como Google, Microsoft, Airbnb, Slack e Asana usam TypeScript para criar aplicações escaláveis e robustas. A linguagem é amplamente adotada em projetos de código aberto, frameworks e bibliotecas populares, como Angular, React, Vue, Nest.js e Next.js. TypeScript é uma escolha popular para desenvolvimento web moderno, oferecendo segurança, produtividade e escalabilidade para equipes de desenvolvimento.
        </p>
        <h2>📌 Código "Hello, World!" em TypeScript</h2>
        <p>Aqui está um exemplo simples de um programa em TypeScript que imprime "Hello, World!" no console:</p>
        <img src={helloWorldTSImage} alt="Código Hello World em Python" className={styles.codeImage} />
        <p>Este código é extremamente simples e direto:</p>
        <p>🔹 print("Hello, World!") – Exibe a mensagem no console.</p>
        <h2>Agora, vamos gerar a imagem desse código! 🎨🖥️</h2>
        <img src={helloWorldTSCodeImage} alt="Código Hello World em Python" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default TypescriptPage;
