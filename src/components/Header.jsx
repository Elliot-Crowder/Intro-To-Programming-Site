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
            <Link className={styles.navItem} to="/schedule">
              Class Schedule
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to="/assignments">
              Assignments
            </Link>
          </li>
          <li>
            <Link className={styles.navItem}>Notes</Link>
          </li>
          <li>
            <Link className={styles.navItem}>About Me</Link>
          </li>
        </ul>
      </nav>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
    </header>
  );
}
export default Header;
