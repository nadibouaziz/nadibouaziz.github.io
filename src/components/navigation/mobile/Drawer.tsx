import Link from "next/link";
import styles from "../navigation.module.css";
import { navLinks } from '../constants/navLinks';

type DrawerStatus = {
  isOpenClose: boolean;
  resetMenu: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Drawer = ({ isOpenClose, resetMenu }: DrawerStatus) => {
  return (
    <aside data-open={isOpenClose} className={styles.asideDrawer}>
      <nav className={styles.navDrawer}>
        <ul>
          {navLinks.map(e => (
            <li key={e.path}>
              <Link onClick={resetMenu} href={e.path}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Drawer;
