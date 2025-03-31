import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldKotlinImage from '../../assets/images/HelloWorldKotlin.png';


function KotlinPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>Kotlin – A Evolução do Desenvolvimento Android 🚀
        </h1>
        <h2>🔹 O que é Kotlin?</h2>
        <p>
          Kotlin é uma linguagem moderna criada pela JetBrains e oficialmente adotada pelo Google em 2017 como a principal linguagem para desenvolvimento Android. Ela é interoperável com Java e pode ser usada para desenvolvimento backend (Spring Boot), desktop e multiplataforma (Kotlin Multiplatform).
        </p>
        <br />
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Sintaxe Simples e Concisa – Menos código comparado ao Java.<br />
          ✅ Tipagem Estática – Erros são detectados em tempo de compilação.<br />
          ✅ 100% Interoperável com Java – Pode ser usado junto ao Java sem problemas.<br />
          ✅ Extensões de Funções – Adiciona novas funcionalidades a classes existentes.<br />
          ✅ Nulo Seguro (Null Safety) – Reduz erros de NullPointerException.<br />
          ✅ Inferência de Tipo – O compilador deduz o tipo de variável automaticamente.<br />
          ✅ Programação Funcional e Orientada a Objetos – Suporte a ambos os paradigmas.<br />
          ✅ Lambdas e Funções de Ordem Superior – Facilita o uso de funções como parâmetros.<br />
          ✅ Coroutines – Facilita a programação assíncrona e concorrente.<br />
          ✅ Multiplataforma – Suporte a Android, backend, desktop e até iOS.
        </p>
        <h2>🔹 Quem usa Kotlin?</h2>
        <p>
        Grandes empresas como Google, Netflix, Pinterest, Trello, Uber e Coursera adotam Kotlin para desenvolvimento Android e backend. Além disso, a linguagem é amplamente utilizada em startups e projetos de código aberto devido à sua simplicidade e eficiência. Kotlin é uma escolha popular entre desenvolvedores que buscam uma linguagem moderna e poderosa para criar aplicações robustas e escaláveis.
        </p>
        <h2>📌 Código "Hello, World!" em Kotlin</h2>
        <p>Aqui está um exemplo simples de um programa em Kotlin que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldKotlinImage} alt="Código Hello World em Kotlin" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default KotlinPage;
