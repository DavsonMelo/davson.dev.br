import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldAndroidStudioImage from '../../assets/images/HelloWorldAndroidStudio.png';


function AndroidStudioPage() {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.linguagem}>
                <h1>
                    Android Studio – A IDE Oficial para Desenvolvimento Android 📱🚀
                </h1>
                <h2>🔹 O que é Android Studio?</h2>
                <p>
                    O Android Studio é a IDE oficial do Google para desenvolvimento de aplicativos Android. Baseado no IntelliJ IDEA da JetBrains, ele oferece um ambiente completo para criação, testes e depuração de apps para Android, desde smartphones até dispositivos como tablets, TVs, carros e wearables. Com suporte a Kotlin, Java e C++, o Android Studio é a escolha ideal para desenvolvedores que buscam uma plataforma robusta e eficiente para criar aplicações móveis.
                </p>
                <br />
                <h2>🔹 Características principais</h2>
                <p>
                    ✅ Suporte a Kotlin, Java e Dart (Flutter) – Foco principal em Kotlin, mas compatível com outras linguagens.<br />
                    ✅ Editor de Código Avançado – Autocompletar, refatoração e navegação fácil entre arquivos.<br />
                    ✅ Interface Gráfica para Design de Layouts – Editor visual com Jetpack Compose e XML.<br />
                    ✅ Ferramentas de Debugging – Depuração avançada com pontos de interrupção e análise de desempenho.<br />
                    ✅ Emulador de Dispositivos – Simula diferentes tamanhos de tela e versões do Android.<br />
                    ✅ Integração com Git e Controle de Versão – Suporte a repositórios Git, SVN e Mercurial.<br />
                    ✅ Ferramentas de Performance – Monitoramento de CPU, RAM e consumo de bateria.<br />
                    ✅ Testes Automatizados – Suporte a JUnit, Espresso e UI Automator para testes de unidade e interface.<br />
                    ✅ Integração com Firebase – Para autenticação, banco de dados e push notifications.<br />
                    ✅ Gerenciamento de Dependências com Gradle – Facilita a organização e automação do projeto.
                </p>
                <h2>🔹 Quem usa Android Studio?</h2>
                <p>
                    Todos os desenvolvedores que criam aplicativos Android nativos, incluindo empresas como Google, Samsung, Xiaomi, Uber, WhatsApp, Instagram e milhares de startups e desenvolvedores independentes. O Android Studio é amplamente adotado na indústria devido à sua robustez, flexibilidade e suporte contínuo do Google, tornando-se a escolha padrão para o desenvolvimento de aplicativos Android.
                </p>
                <h2>📌 Código "Hello, World!" em Android Studio</h2>
                <p>
                    Aqui está um exemplo básico de um aplicativo Android exibindo "Hello, World!" na tela, usando Jetpack Compose (forma moderna de criar interfaces no Android):
                </p>
                <img src={helloWorldAndroidStudioImage} alt="Código Hello World em Android Studio" className={styles.codeImage} />
                <p>
                    Este código segue a estrutura básica de um app Android com Jetpack Compose:
                </p>
                <ul>
                    <li>🔹 <strong>package</strong>: Define o pacote do aplicativo.</li>
                    <li>🔹 <strong>import</strong>: Importa as bibliotecas necessárias para o funcionamento do app.</li>
                    <li>🔹 <strong>fun main</strong>: Função principal que inicia o aplicativo.</li>
                    <li>🔹 <strong>setContent</strong>: Define o conteúdo da tela usando a função <strong>Greeting</strong>.</li>
                    <li>🔹 <strong>@Composable</strong>: Anotação que indica que a função pode ser usada para construir a interface do usuário.</li>
                    <li>🔹 <strong>Text</strong>: Componente que exibe texto na tela.</li>
                    <li>🔹 <strong>Preview</strong>: Anotação que permite visualizar a interface no editor sem precisar executar o aplicativo.</li>
                </ul>
            </main>
        </div>
    );
}

export default AndroidStudioPage;
