import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldPythonImage from '../../assets/images/HelloWorldPy.png';
import helloWorldPythonCodeImage from '../../assets/images/consoleHW-PY.png';

function PythonPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          Python – Simples, Poderoso e Onipresente 🐍
        </h1>
        <h2>
          🔹 O que é Python?
        </h2>
        <p>
        Python é uma das linguagens de programação mais populares do mundo, criada por Guido van Rossum e lançada em 1991. Sua sintaxe clara e legível a torna perfeita tanto para iniciantes quanto para desenvolvedores experientes. Python é amplamente utilizado em desenvolvimento web, automação, ciência de dados, inteligência artificial, machine learning e cibersegurança. A linguagem é conhecida por sua simplicidade, versatilidade e vasta biblioteca padrão, que inclui módulos para praticamente qualquer tarefa de programação.
        </p>
        <h2>
          🔹 Características principais
        </h2>
        <p>
          ✅ Fácil de Aprender – Sintaxe limpa e legível, ideal para iniciantes.<br />
          ✅ Versátil – Usada em web, automação, ciência de dados, IA, machine learning e mais.<br />
          ✅ Multiplataforma – Disponível para Windows, macOS, Linux e outras plataformas.<br />
          ✅ Vasta Biblioteca Padrão – Módulos para praticamente qualquer tarefa de programação.<br />
          ✅ Comunidade Ativa – Grande número de bibliotecas e frameworks mantidos pela comunidade.<br />
          ✅ Open Source – Gratuito para uso e distribuição, com código fonte aberto.<br />
          ✅ Interpretação e Compilação – Pode ser interpretado ou compilado para bytecode.<br />
          ✅ Orientada a Objetos – Suporta programação orientada a objetos e funcional.<br />
          ✅ Dinamicamente Tipada – Não é necessário declarar o tipo de variáveis.<br />
          ✅ Indentação Significativa – Blocos de código são definidos pela indentação.
        </p>
        <h2>
          🔹 Quem usa Python?
        </h2>
        <p>
          Empresas como Google, Facebook, Instagram, Spotify, Netflix, Dropbox e NASA utilizam Python em seus produtos e serviços. A linguagem é amplamente adotada em startups, empresas de tecnologia, instituições acadêmicas e governamentais. Python é uma das linguagens mais populares para desenvolvimento web, ciência de dados e automação de tarefas, com uma comunidade ativa e uma vasta oferta de bibliotecas e frameworks.
        </p>
        <h2>📌 Código "Hello, World!" em Python</h2>
        <p>Aqui está um exemplo simples de um programa em Python que imprime "Hello, World!" no console:</p>
        <img src={helloWorldPythonImage} alt="Código Hello World em Python" className={styles.codeImage} />
        <p>Este código é extremamente simples e direto:</p>
        <p>🔹 print("Hello, World!") – Exibe a mensagem no console.</p>
        <h2>Agora, vamos gerar a imagem desse código! 🎨🖥️</h2>
        <img src={helloWorldPythonCodeImage} alt="Código Hello World em Python" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default PythonPage;
