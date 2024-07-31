import NavMenuDesktop from "./desktop/NavMenu";
import Logo from "./Logo";
import NavMenuMobile from "./mobile/NavMenuMobile";
import styles from "./navigation.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenuDesktop />
      <NavMenuMobile />
    </header>
  );
};
export default Header;
