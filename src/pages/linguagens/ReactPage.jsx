import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldReactImage from '../../assets/images/HelloWorldReact.png';

function ReactPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          React – A Biblioteca Revolucionária do Frontend ⚛️
        </h1>
        <h2>
          🔹 O que é React?
        </h2>
        <p>
          React é uma biblioteca JavaScript para construção de interfaces de usuário, criada pelo Facebook (Meta) em 2013. Ele é usado para desenvolver aplicações web e mobile dinâmicas, sendo altamente eficiente graças ao seu Virtual DOM. React é conhecido por sua simplicidade, flexibilidade e alto desempenho, permitindo aos desenvolvedores criar componentes reutilizáveis e interativos com facilidade.
        </p>
        <h2>
          🔹 Características principais
        </h2>
        <p>
          ✅ Componentização – Divide a UI em pequenos componentes reutilizáveis.<br />
          ✅ JSX – Sintaxe que mistura HTML e JavaScript para criar elementos.<br />
          ✅ Virtual DOM – Atualizações rápidas e eficientes sem renderizações desnecessárias.<br />
          ✅ Props e State – Gerencia o estado e as propriedades dos componentes.<br />
          ✅ Unidirecional (One-Way Data Binding) – Facilita o controle do estado da aplicação.<br />
          ✅ Ciclo de Vida – Métodos para controlar a criação, atualização e destruição de componentes.<br />
          ✅ React Hooks – Permitem usar estado e outros recursos sem classes.<br />
          ✅ Context API – Gerencia o estado global da aplicação sem prop drilling.<br />
          ✅ Grande Ecossistema – Integra-se facilmente com Next.js, Redux, Tailwind e outras tecnologias.<br />
          ✅ Comunidade Ativa – Milhares de bibliotecas e ferramentas disponíveis no ecossistema React.<br />
          ✅ React Native – Usa o mesmo paradigma para criar apps mobile nativos.
        </p>
        <h2>
          🔹 Quem usa React?
        </h2>
        <p>
          Empresas como Meta (Facebook, Instagram, WhatsApp), Netflix, Airbnb, Uber e Discord usam React para criar interfaces escaláveis e dinâmicas. A biblioteca é amplamente adotada em projetos de código aberto, startups e grandes corporações, sendo a escolha principal para desenvolvimento frontend moderno. React é uma ferramenta poderosa para criar aplicações web e mobile interativas, oferecendo uma experiência de desenvolvimento eficiente e produtiva.
        </p>
        <h2>
          📌 Código "Hello, World!" em React (JSX + TypeScript)
        </h2>
        <p>
          Aqui está um exemplo simples de um componente React que exibe "Hello, World!":
        </p>
        <img src={helloWorldReactImage} alt="Código Hello World em React + Typescript" className={styles.codeImage} />
        <p>Este código:</p>
        <p>
          🔹 import React from "react"; – Importa a biblioteca React.<br/>
          🔹 const App: React.FC = () =&gt; {"{}"} – Define um componente funcional com TypeScript.<br/>
          🔹 Hello, World! – Renderiza um título na tela.<br/>
          🔹 export default App; – Permite a reutilização do componente.
        </p>
      </main>
    </div>
  );
}

export default ReactPage;
