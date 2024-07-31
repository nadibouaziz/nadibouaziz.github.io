"use client";

import { useState } from "react";

import Drawer from "./Drawer";
import Burger from "./Burger";
import { useWidth } from "@/utils/hook";
import styles from '../navigation.module.css';

const NavMenuMobile = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleBurger = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setMenuActive(!menuActive);
  };

  const resetMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setMenuActive(false);
  };

  // BUG FIX: cleaner way
  const width = useWidth();
  if (width > 576 && menuActive) setMenuActive(false);

  return (
    <div className={styles.mobileNav}>
      <Burger drawerStatus={menuActive} toggleBurger={toggleBurger} />
      <Drawer isOpenClose={menuActive} resetMenu={resetMenu} />
    </div>
  );
};

export default NavMenuMobile;
