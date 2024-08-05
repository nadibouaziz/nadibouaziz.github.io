"use client";

import NavMenuDesktop from "./desktop/NavMenu";
import NavMenuMobile from "./mobile/NavMenuMobile";
import styles from "./navigation.module.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.containerHeader} ${isScrolled ? styles.scrolled : ""}`}
    >
      <header className={styles.header}>
        <span className={styles.logo}>Nadi.</span>
        <NavMenuDesktop />
        <NavMenuMobile />
      </header>
    </div>
  );
};
export default Header;
