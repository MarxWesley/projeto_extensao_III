import React from "react";
import styles from "./Footer.module.css"; // Para estilização
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()}
      <a href="/sobre">Sobre</a>
      </p>
      <nav>
        <a href="https://www.instagram.com/ieediomicio/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram">
        <FaInstagram/></a>

        <a href="https://www.facebook.com/p/IEE-Diomício-Freitas-100066695940896/?locale=pt_BR&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook">
          <FaFacebookF/>  </a>
          <FaPhone/> (48) 3433-8235
        </nav>

        <div className={styles.contactInfo}>
          <p><FaMapMarkerAlt/> R. Lúcia Milioli 211, Santa Bárbara, Criciúma - SC </p>

        </div>
    </footer>
  );
};

export default Footer