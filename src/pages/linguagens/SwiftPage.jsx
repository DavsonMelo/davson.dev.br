import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldSwiftImage from '../../assets/images/HelloWorldSwift.png';


function SwiftPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.linguagem}>
                <h1>Swift – A Linguagem Moderna da Apple 🍏
                </h1>
                <h2>🔹 O que é Swift?</h2>
                <p>
                    Swift é uma linguagem de programação criada pela Apple em 2014, projetada para ser rápida, segura e fácil de ler. Ela é usada para desenvolver aplicativos para iOS, macOS, watchOS e tvOS, sendo a principal substituta do Objective-C no ecossistema da Apple. Swift combina a eficiência de linguagens de baixo nível com a simplicidade de linguagens de alto nível, permitindo que os desenvolvedores criem aplicativos robustos e de alto desempenho.
                </p>
                <h2>🔹 Características principais</h2>
                <p>
                    ✅ Sintaxe Simples e Moderna – Código limpo e fácil de entender.<br/>
                    ✅ Tipagem Estática e Dinâmica – Flexibilidade na definição de tipos.<br/>
                    ✅ Segurança em Primeiro Lugar – Evita erros comuns de memória.<br/>
                    ✅ Performance Superior – Compilação otimizada para velocidade.<br/>
                    ✅ Rápida e Eficiente – Desenvolvida para alto desempenho.<br/>
                    ✅ Orientada a Objetos e Funcional – Suporta ambos os paradigmas.<br/>
                    ✅ Interoperável com Objective-C – Permite uso de bibliotecas antigas.<br/>
                    ✅ Open Source – Disponível para Linux e outras plataformas além da Apple.
                </p>
                <h2>🔹 Quem usa Swift?</h2>
                <p>
                Swift é utilizado por Apple, Airbnb, Uber, LinkedIn, WhatsApp e várias startups para desenvolver aplicativos modernos e rápidos para o ecossistema Apple. Sua popularidade cresceu rapidamente, tornando-se uma das linguagens mais procuradas no desenvolvimento de aplicativos móveis.
                </p>
                <h2>📌 Código "Hello, World!" em Swift</h2>
                <p>Aqui está um exemplo simples de um programa em Swift que imprime "Hello, World!" no console:
                </p>
                <img src={helloWorldSwiftImage} alt="Hello World Swift" className={styles.codeImage} />
                <p>Esse código é um exemplo básico de como imprimir uma mensagem no console usando a linguagem Swift. Ele demonstra a simplicidade e clareza da sintaxe da linguagem.</p>
            </main>
        </div>
    );
}

export default SwiftPage;
