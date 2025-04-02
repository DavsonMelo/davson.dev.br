import React from "react";
import useNoticias from "../../../hooks/useNoticias";
import styles from "../../../pages/home/Home.module.css";

function Section2() {
  const { noticias, loading } = useNoticias();

  return (
    <div className={styles.section2}>
      <h1>Últimas Notícias</h1>
      <div className={styles.noticiasContainer}>
        {noticias.map((noticia, index) => (
          <div key={index} className={styles.cardNoticia}>
            <img src={noticia.image_url} alt={noticia.title} />
            <h3>{noticia.title}</h3>
            <a href={noticia.link} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section2;
