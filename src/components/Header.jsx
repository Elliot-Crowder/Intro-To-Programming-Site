import styles from "./Header.module.css";
import { Link } from "react-router";
function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.navItem}>Home</Link>
          </li>

          <li>
            <Link className={styles.navItem}>Class Schedule</Link>
          </li>
          <li>
            <Link className={styles.navItem}>Assignments</Link>
          </li>
          <li>
            <Link className={styles.navItem}>Notes</Link>
          </li>
          <li>
            <Link className={styles.navItem}>About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
