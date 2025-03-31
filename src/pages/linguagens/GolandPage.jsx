import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldGoImage from '../../assets/images/HelloWorldGo.png';


function GolandPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>Golang (Go) – A linguagem do futuro em alto desempenho 🚀</h1>
        <h2>🔹 O que é Golang?</h2>
        <p>
          Golang, ou simplesmente Go, é uma linguagem de programação desenvolvida pelo Google em 2007 e lançada em 2009. Criada por Robert Griesemer, Rob Pike e Ken Thompson, ela foi projetada para ser rápida, eficiente e segura, com um forte suporte para concorrência.

          Go combina a simplicidade de linguagens como Python com a eficiência e segurança de C/C++, sendo amplamente utilizada em sistemas distribuídos, aplicações em nuvem, microsserviços e até inteligência artificial.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Tipagem Estática e Forte – Erros detectados em tempo de compilação.<br/>
          ✅ Sintaxe Simples – Menos complexidade que C e C++.<br/>
          ✅ Concorrência Nativa – Usa goroutines para processamento paralelo leve.<br/>
          ✅ Compilação Rápida – Compila diretamente para binário, sem necessidade de VM.<br/>
          ✅ Gerenciamento Automático de Memória – Garbage collector embutido.<br/>
          ✅ Biblioteca Padrão Robusta – Inclui suporte para redes, JSON, HTTP, etc.<br/>
          ✅ Código Open Source – Mantida pela comunidade e Google.
        </p>
        <h2>🔹 Quem usa Golang?</h2>
        <p>
          Empresas como Google, Uber, Dropbox, Docker, Kubernetes, Cloudflare e SoundCloud utilizam Go devido à sua eficiência e facilidade para lidar com cargas de trabalho escaláveis. A linguagem também é popular em projetos de código aberto e startups que buscam alto desempenho e produtividade.
        </p>
        <h2>📌 Código "Hello, World!" em Golang</h2>
        <p>Aqui está um exemplo simples de um programa em Go que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldGoImage} alt="Código Hello World em Go" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default GolandPage;
