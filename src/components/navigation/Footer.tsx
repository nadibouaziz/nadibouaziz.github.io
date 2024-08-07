"use client";

import SocialMedia from "../SocialMedia";
import styles from "./navigation.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Nadi Bouaziz</p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
