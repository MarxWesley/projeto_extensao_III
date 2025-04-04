import React from "react";
import styles from "./Footer.module.css"; // Para estilização

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>WORKING ON</p>
      <nav>
        <a href="/sobre">Sobre</a> | <a href="/contato">Contato</a>
        <a href="https://www.instagram.com/ieediomicio/
"
        target="_blank" 
        rel="noopener noreferrer">Instagram
</a>
      </nav>
    </footer>
  );
};

export default Footer;