import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldRustImage from '../../assets/images/HelloWorldRust.png';


function RustPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>Rust – A Linguagem Segura e Performática 🚀🦀
        </h1>
        <h2>🔹 O que é Rust?</h2>
        <p>
          Rust é uma linguagem de programação moderna, criada pela Mozilla em 2010, focada em segurança, concorrência e alta performance. Ela é amplamente utilizada para sistemas de baixo nível, como desenvolvimento de kernels, navegadores (Firefox), blockchain e jogos. Rust é conhecida por seu sistema de tipos avançado, que previne erros comuns de programação, como vazamentos de memória e condições de corrida. A linguagem combina a eficiência de C/C++ com a segurança de linguagens como Python e Java, tornando-a uma escolha popular para desenvolvedores que buscam desempenho sem comprometer a segurança.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Gerenciamento de Memória Sem Garbage Collector – Usa ownership para evitar vazamentos.<br />
          ✅ Extremamente Rápida – Performance comparável à do C e C++.<br />
          ✅ Segurança Garantida em Tempo de Compilação – Previne erros de memória como Null Pointer e Data Races.<br />
          ✅ Concorrência Segura – Sem risco de condições de corrida.<br />
          ✅ Ferramentas Modernas – Cargo (gerenciador de pacotes), Clippy (linting) e Rustfmt (formatação).<br />
          ✅ Código Aberto e Crescente Popularidade – Adotado por empresas como Google, Microsoft, Amazon e Discord
        </p>
        <h2>🔹 Quem usa Rust?</h2>
        <p>
          Empresas como Google (Android), Microsoft (Windows), Amazon, Dropbox, Cloudflare e Discord utilizam Rust para projetos críticos que exigem performance e segurança. Rust é especialmente popular em áreas como desenvolvimento de sistemas, blockchain, jogos e aplicações web de alta performance. Sua crescente adoção por grandes empresas e sua comunidade ativa tornam Rust uma linguagem promissora para o futuro do desenvolvimento de software.
        </p>
        <h2>📌 Código "Hello, World!" em Rust</h2>
        <p>Aqui está um exemplo simples de um programa em Rust que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldRustImage} alt="Código Hello World em Rust" className={styles.codeImage} />
        <p>Este código é extremamente simples e direto:</p>
      </main>
    </div>
  );
}

export default RustPage;
