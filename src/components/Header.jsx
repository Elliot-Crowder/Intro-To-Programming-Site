import styles from "./Header.module.css";
import { Link } from "react-router";
function Header() {
  return (
    <header>
      <h1>Intro To Computer Science</h1>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.link}>Home</Link>
          </li>
          <li>
            <Link className={styles.link}>About Me</Link>
          </li>
          <li>
            <Link className={styles.link}>Class Schedule</Link>
          </li>
          <li>
            <Link className={styles.link}>Notes</Link>
          </li>
          <li>
            <Link className={styles.link}>Assignments</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.contactButton}>Contact me</button>
    </header>
  );
}
export default Header;
