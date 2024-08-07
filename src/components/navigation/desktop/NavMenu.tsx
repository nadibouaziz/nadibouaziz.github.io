import Link from "next/link";
import styles from "../navigation.module.css";
import { navLinks } from "../../../constants/navLinks";
import { usePathname } from "next/navigation";

const NavMenuDesktop = () => {
  const currentPath = usePathname();

  return (
    <nav className={styles.desktopMenu}>
      {navLinks.map((e) => (
        <Link
          key={e.path}
          href={e.path}
          className={`
            ${currentPath === e.path ? styles.active : ""}
            ${e.className ? e.className : ""}
          `.trim()}
        >
          {e.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenuDesktop;
