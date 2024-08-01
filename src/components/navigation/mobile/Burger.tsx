import styles from "../navigation.module.css";

type BurgerProps = {
  drawerStatus: boolean;
  toggleBurger: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Burger = ({ drawerStatus, toggleBurger }: BurgerProps) => {
  return (
    <button
      data-open={`${drawerStatus}`}
      onClick={toggleBurger}
      className={styles.burgerMenu}
    >
      <div className={styles.hamBox}>
        <div className={styles.hamBoxInner} />
      </div>
    </button>
  );
};

export default Burger;
