import Link from "next/link";
import styles from "../navigation.module.css";
import { navLinks } from "../constants/navLinks";

const NavMenuDesktop = () => {
  return (
    <nav className={styles.desktopMenu}>
      <ul>
        {navLinks.map((e) => (
          <li key={e.path}>
            <Link href={e.path}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenuDesktop;
