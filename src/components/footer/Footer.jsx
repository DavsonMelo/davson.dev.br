import React from "react";
import styles from "./Footer.module.css";

function Footer({ activeIndex, total }) {
  return (
    <div className={styles.footer}>
      {Array.from({ length: total }).map((_, index) => (
        <span 
          key={index} 
          className={`${styles.dot} ${index === activeIndex ? styles.active : ""}`} 
        />
      ))}
    </div>
  );
}

export default Footer;
