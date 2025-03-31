import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldJavaImage from '../../assets/images/HelloWorldJAVA.png';

function JavaPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          Java – A Linguagem do "Escreva uma vez, execute em qualquer lugar" ☕
        </h1>
        <h2>🔹 O que é Java?
        </h2>
        <p>
          Java é uma das linguagens de programação mais populares do mundo, criada pela Sun Microsystems (atualmente Oracle) em 1995. É amplamente usada paramento de aplicações empresariais, mobile (Android), desktop e sistemas baáveis. Java é uma linguagem de programação orientada a objetos, com uma sins e limpa, que permite a criação de programas robustos e seguros. Uma das prracterísticas do Java é a portabilidade, ou seja, o código Java pode ser exeualquer plataforma que possua uma máquina virtual Java (JVM) instalada. Icido como o princípio "Write Once, Run Anywhere" (WORA). Java é uma linrogramação de propósito geral, com uma vasta biblioteca padrão e uma grande de desenvolvedores. Ela é usada em uma variedade de aplicações, desde sistados até grandes sistemas distribuídos.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Orientada a Objetos – Baseada em classes e objetos para melhor organização do código.<br />
          ✅ Sintaxe Simples e Limpa – Facilita a leitura e manutenção do código.<br />
          ✅ Portável – Graças à JVM (Java Virtual Machine), pode rodar em qualquer sistema operacional.<br />
          ✅ Multiplataforma – Disponível para Windows, macOS, Linux e outras plataformas.<br />
          ✅ Tipagem Estática e Forte – Reduz erros em tempo de execução.<br />
          ✅ Garbage Collection – Gerenciamento automático de memória.<br />
          ✅ Multithreading – Suporte nativo para concorrência e processamento paralelo.<br />
          ✅ Biblioteca Padrão – Inclui funções para manipulação de strings, coleções, I/O, etc.<br />
          ✅ Seguro e Confiável – Muito usado em bancos, fintechs e aplicações empresariais.<br />
          ✅ Gigante no Desenvolvimento Android – Junto com Kotlin, é a base do desenvolvimento Android.
        </p>
        <h2>🔹 Quem usa Java?</h2>
        <p>
          Empresas como Google, Amazon, Netflix, Twitter, Uber e grandes bancos usam Java devido à sua confiabilidade e escalabilidade. A linguagem também é amplamente utilizada em sistemas financeiros, aplicações corporativas, jogos, aplicativos Android e muito mais. Java é uma das linguagens mais populares para desenvolvimento de software, com uma grande comunidade de desenvolvedores e vasta oferta de ferramentas e frameworks.
        </p>
        <h2>📌 Código "Hello, World!" em Java</h2>
        <p>Aqui está um exemplo simples de um programa em Go que imprime "Hello, World!" no console:</p>
        <img src={helloWorldJavaImage} alt="Código Hello World em Java" className={styles.codeImage} />
        
        <h2>Este código segue a estrutura básica de um programa Java:</h2>
        <p>
        🔹 public class HelloWorld – Define uma classe chamada HelloWorld.<br />
        🔹 public static void main(String[] args) – Método principal, ponto de entrada do programa.<br  />
        🔹 System.out.println("Hello, World!"); – Exibe a mensagem no console.
      </p>
      </main>
      
    </div>
  );
}

export default JavaPage;
