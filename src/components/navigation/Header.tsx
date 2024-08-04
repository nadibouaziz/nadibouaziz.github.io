import NavMenuDesktop from "./desktop/NavMenu";
import NavMenuMobile from "./mobile/NavMenuMobile";
import styles from "./navigation.module.css";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <header className={styles.header}>
        <span className={styles.logo}>Nadi.</span>
        <NavMenuDesktop />
        <NavMenuMobile />
      </header>
    </div>
  );
};
export default Header;
