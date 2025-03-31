import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Linguagens.module.css';
import helloWorldCImage from '../../assets/images/HelloWorldC.png';


function CPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.linguagem}>
        <h1>Introdução ao C++: A Linguagem Poderosa de Programação</h1>
        <p>
          C++ é uma linguagem de programação de propósito geral, criada por Bjarne Stroustrup em 1979 como uma extensão da linguagem C. Ela foi projetada para fornecer um maior controle sobre os recursos do sistema, oferecendo tanto programação procedural quanto orientada a objetos. Como resultado, C++ é uma das linguagens mais poderosas e flexíveis, amplamente utilizada em sistemas operacionais, jogos, softwares de alto desempenho e muitas outras aplicações que exigem alta eficiência.

          C++ é conhecida pela sua performance, controle de memória e flexibilidade, sendo frequentemente escolhida para sistemas que necessitam de otimização extrema. Além disso, a linguagem oferece suporte a conceitos como classes, herança, polimorfismo e encapsulamento, elementos essenciais para a programação orientada a objetos.

          A linguagem é também famosa por ser um pouco mais difícil de aprender em comparação com outras linguagens mais modernas, devido ao seu controle manual sobre a memória e a complexidade do gerenciamento de ponteiros. Porém, quando dominada, C++ oferece uma poderosa ferramenta para criar aplicações robustas e eficientes.</p>

          <h2>Características principais do C++:</h2>
          
          <p>
          Programação Orientada a Objetos (OOP): Suporta classes, herança, polimorfismo e encapsulamento, permitindo criar código mais modular e reutilizável.

          Controle de Memória: Oferece controle direto sobre a alocação e liberação de memória, utilizando ponteiros.

          Desempenho: É uma linguagem compilada que gera código altamente otimizado, tornando-a ideal para aplicações que exigem alto desempenho, como jogos e sistemas em tempo real.

          Bibliotecas Padrão: A Standard Template Library (STL) fornece estruturas de dados e algoritmos genéricos, como vetores, listas e mapas, facilitando o desenvolvimento de aplicações complexas.

          Portabilidade: Programas C++ podem ser compilados e executados em diferentes plataformas, tornando a linguagem altamente portátil.</p>
          <p>
          C++ continua sendo uma das linguagens mais populares, apesar do crescimento de outras linguagens como Python e JavaScript. Sua versatilidade e performance a tornam indispensável em muitos domínios da computação, incluindo software de sistemas, jogos, processamento gráfico e simulações científicas.
        </p>
        <h2>Exemplo de Código (Hello World):</h2>
        <img src={helloWorldCImage} alt="Codigo Hello World em C" className={styles.codeImage} />
      </main>
    </div>
  );
}

export default CPage;
