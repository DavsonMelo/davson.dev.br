import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldPHPImage from '../../assets/images/HelloWorldPHP.png';


function PHPPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>
          PHP – A Linguagem do Back-end Web 🌐🐘
        </h1>
        <h2>🔹 O que é PHP?</h2>
        <p>
          PHP (Hypertext Preprocessor) é uma linguagem de programação server-side criada por Rasmus Lerdorf em 1995. É amplamente usada para o desenvolvimento de aplicações web dinâmicas e APIs, sendo a base de plataformas como WordPress, Facebook (nos primeiros anos), Wikipedia e Laravel. PHP é uma linguagem de script interpretada, o que significa que o código é executado no servidor e o resultado é enviado ao navegador do cliente. Sua sintaxe é semelhante à do C e do Perl, tornando-a fácil de aprender para desenvolvedores com experiência em outras linguagens. PHP é especialmente eficaz para criar páginas web dinâmicas, manipular bancos de dados e gerenciar sessões de usuários.
        </p>
        <h2>🔹 Características principais</h2>
        <p>
          ✅ Execução no Servidor – Gera páginas dinâmicas antes de serem enviadas ao navegador.<br />
          ✅ Sintaxe Similar ao C e JavaScript – Fácil aprendizado para desenvolvedores web.<br />
          ✅ Integração com HTML – Código PHP pode ser misturado diretamente com HTML.<br />
          ✅ Conexão com Bancos de Dados – Suporte a MySQL, PostgreSQL, SQLite, entre outros.<br />
          ✅ Frameworks Populares – Laravel, Symfony, CodeIgniter, entre outros.<br />
          ✅ Código Aberto e Ampla Comunidade – Presente em milhões de sites no mundo
        </p>
        <h2>🔹 Quem usa PHP?</h2>
        <p>
        Facebook (no início), WordPress, Wikipedia, Slack, Mailchimp, Etsy, Yahoo! e muitas outras plataformas utilizam PHP para desenvolvimento web. PHP é uma escolha popular entre desenvolvedores web devido à sua facilidade de uso, flexibilidade e vasta gama de bibliotecas e frameworks disponíveis. É especialmente eficaz para criar aplicações web dinâmicas e gerenciar interações com bancos de dados.
        </p>
        <h2>📌 Código "Hello, World!" em PHP</h2>
        <p>Aqui está um exemplo simples de um programa em PHP que imprime "Hello, World!" no console:
        </p>
        <img src={helloWorldPHPImage} alt="Código Hello World em PHP" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default PHPPage;
