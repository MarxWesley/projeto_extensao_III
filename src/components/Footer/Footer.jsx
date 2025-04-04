import React from "react";
import styles from "./Footer.module.css"; // Para estilização
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
      <nav>
        <a href="/sobre">Sobre</a> |
        <a href="https://www.instagram.com/ieediomicio/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram">
        <FaInstagram/></a>
        <a href="https://www.facebook.com/p/IEE-Diom%C3%ADcio-Freitas-100066695940896/?locale=pt_BR&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook">
          <FaFacebookF/></a>
      </nav>
    </footer>
  );
};

export default Footer;