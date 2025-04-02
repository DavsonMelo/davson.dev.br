import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/header/Header'; 
import Footer from "../../components/footer/Footer";
import styles from './Home.module.css';

import Section1 from '../../components/body/sections/Section1'; 
import Section2 from '../../components/body/sections/Section2'; 
import Section3 from '../../components/body/sections/Section3'; 

function Home() {
  const mainRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!mainRef.current) return;
      const scrollLeft = mainRef.current.scrollLeft;
      const sectionWidth = mainRef.current.clientWidth;
      const index = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(index);
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
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
