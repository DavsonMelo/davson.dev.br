import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';

function VSCodePage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.linguagem}>
                <h1>
                    Visual Studio Code (VS Code): A IDE Poderosa e Versátil para Desenvolvedores
                    💻
                </h1>
                <h2>🔹 O que é o VSCode?</h2>
                <p>
                    O Visual Studio Code (VS Code) é um dos editores de código mais populares e amplamente utilizados no mundo do desenvolvimento de software. Criado pela Microsoft, ele se destaca por ser leve, rápido e altamente extensível, oferecendo suporte para diversas linguagens de programação e frameworks.
                </p>
                <br />
                <h2>🔹 Interface Moderna e Intuitiva</h2>
                <p>
                    O VS Code possui uma interface limpa e personalizável, permitindo que os desenvolvedores ajustem o ambiente conforme suas necessidades. O suporte a temas e atalhos de teclado personalizáveis torna a experiência ainda mais confortável.
                </p>
                <h2>🔹 Suporte Nativo a Várias Linguagens</h2>
                <p>
                    O editor já vem pronto para trabalhar com linguagens como JavaScript, TypeScript, Python, C++, Java, HTML, CSS, entre outras. Além disso, através da vasta biblioteca de extensões, é possível adicionar suporte para praticamente qualquer linguagem ou framework.
                </p>
                <h2>🔹 Extensões e Personalização</h2>
                <p>
                    Uma das maiores vantagens do VS Code é sua <strong>loja de extensões</strong>, onde os desenvolvedores podem instalar plugins para aumentar a produtividade. Algumas extensões populares incluem:
                </p>
                <ul className={styles.extensionList}>
                    <li><strong>ESLint</strong> – Para análise de código JavaScript/TypeScript.</li>
                    <li><strong>Prettier</strong> – Para formatação automática do código.</li>
                    <li><strong>Live Server</strong> – Para recarregamento automático de páginas HTML/CSS.</li>
                    <li><strong>GitLens</strong> – Para integração avançada com Git.</li>
                </ul>
                <h2>
                    🔹 IntelliSense e Autocompletar Poderoso
                </h2>
                <p>
                    O VS Code possui um sistema de autocompletar inteligente, chamado IntelliSense, que oferece sugestões e preenche automaticamente trechos de código, reduzindo erros e aumentando a produtividade.
                </p>
                <h2>
                    🔹 Terminal Integrado e Controle de Versão
                </h2>
                <p>
                    Ao contrário de muitos editores de código, o VS Code vem com um terminal embutido, permitindo que os desenvolvedores executem comandos sem precisar alternar entre janelas. Além disso, a <strong>integração nativa com Git</strong> facilita o controle de versões diretamente dentro do editor.
                </p>
                <h2>
                    🔹 Depuração (Debugging) Avançada
                </h2>
                <p>
                    Outro grande diferencial é a capacidade de depuração embutida (debugging). Com suporte a <strong>breakpoints, logs e inspeção de variáveis</strong>, o VS Code torna mais fácil encontrar e corrigir bugs no código.
                </p>
                <h2>
                    🔹 Suporte a Contêineres e Desenvolvimento Remoto
                </h2>
                <p>
                    Com a <strong>extensão Remote - Containers</strong> , os desenvolvedores podem rodar ambientes isolados dentro de <strong>containers Docker</strong>. Além disso, o VS Code oferece suporte a <strong>desenvolvimento remoto,</strong> permitindo programar em máquinas virtuais ou servidores diretamente pelo editor.
                </p>
                <h2>
                    🔹 Gratuito e Open Source
                </h2>
                <p>
                    O VS Code é 100% gratuito e open-source, com um código-fonte disponível no GitHub. Ele recebe atualizações constantes da comunidade e da Microsoft, garantindo melhorias contínuas.
                </p>
                <hr class="linha-continua"></hr>
                <h2>
                    🚀 Por que Usar o VS Code?
                </h2>
                <p>
                    ✅ Leve e rápido, mesmo em máquinas mais simples.<br />
                    ✅ Interface moderna e fácil de usar.<br />
                    ✅ Extensível e altamente personalizável.<br />
                    ✅ Suporte a múltiplas linguagens e frameworks.<br />
                    ✅ Integração nativa com Git e terminal.<br />
                    ✅ Ferramentas avançadas de debugging e integração com Git.<br />
                    ✅ Grande comunidade e suporte ativo.<br />
                    ✅ Totalmente gratuito e de código aberto.
                </p>
                <p>
                    Seja você um iniciante ou um desenvolvedor experiente, o Visual Studio Code é uma excelente escolha para criar desde pequenos projetos até aplicações complexas.
                </p>
                <p>
                🔥 Baixe agora e explore todas as possibilidades: 
                <a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a> 🚀
                </p>
            </main>
        </div>
    );
}

export default VSCodePage;