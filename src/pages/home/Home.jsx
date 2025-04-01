import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/header/Header'; // Importando o header
import Footer from "../../components/footer/Footer";
import styles from './Home.module.css';

import Section1 from '../../components/body/sections/Section1'; // Importando a seção 1
import Section2 from '../../components/body/sections/Section2'; // Importando a seção 2
import Section3 from '../../components/body/sections/Section3'; // Importando a seção 3

function Home() {
  const mainRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = window.innerWidth <= 767;

  useEffect(() => {
    if (!isMobile || !mainRef.current) return;

    const handleScroll = () => {
      const scrollLeft = mainRef.current.scrollLeft;
      const sectionWidth = mainRef.current.clientWidth;
      const index = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(index);
    };

    mainRef.current.addEventListener("scroll", handleScroll);
    return () => mainRef.current.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className={styles.home}>
      <Header />
      <main ref={mainRef} className={styles.main}>
        {isMobile ? (
          <>
            <section><Section2 /></section>
            <section><Section1 /></section>
            <section><Section3 /></section>
          </>
        ) : (
          <>
            <Section1 />
            <Section2 />
            <Section3 />
          </>
        )}
      </main>
      {isMobile && <Footer activeIndex={activeIndex} total={3} />}
    </div>
  );
}

export default Home;