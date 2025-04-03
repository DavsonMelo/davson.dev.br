import React from 'react';
import Header from '../../components/header/Header'; // Importando o header
import styles from './Sobre.module.css';
import foto from '../../assets/images/minhafoto.png'; // Importando a imagem

function Sobre() {
  return (
    <div>
      <Header />
      <main className={styles.mainSobre}>
        <div className={styles.containerSobre}>
          <img src={foto} alt="Minha foto" />

          <div className={styles.containerSobreText}>
            <p>
              "Não há a menor possibilidade, maneira alguma ou qualquer chance, nem hoje nem daqui a mil anos, do cerebro humano, a mente humana, ser suplantada por uma maquina, quer seja binária ou quântica. É como se nossa mente fosse um maratonista liderando a corrida pulando sobre uma das pernas, enquanto seus adversários estudam a milênios como vencê-lo e, quando, finalmente conseguem, o maratonista lembra que tem outra perna para usar."
              <strong>   DAVSON MELO</strong>
            </p>
          </div>

          <div className={styles.containerSobreMim}>
            <p className={styles.apresentacao}>
              Olá, meu nome é Davson Melo, tenho 53 anos e sou um estudante autodidata de programação. 
              Nunca trabalhei na área de TI mas tenho vontade e interesse de fazer essa transição de carreira.
              <br />
            </p>
            <h3>Conhecimentos básicos nas linguagens:</h3>
            <p>Python, Javascript, HTML, Java e Kotlin</p>
            <h3>Conhecimentos básicos em:</h3>
            <p>CSS, Vite, Git & GitHub, JetPack Compose, SQL, Firebase,</p>
            <h3>Conhecimento intermediario em:</h3>
            <p>Android Studio, Intellij Idea, VSCode e Pycharm</p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Sobre;