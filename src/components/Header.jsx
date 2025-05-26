import styles from "./Header.module.css";
import { Link } from "react-router";
import { useLocation } from "react-router";
function Header() {
	const location = useLocation();
	return (
		<header>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link
							className={`${styles.navItem} ${
								location.pathname === "/" ? styles.currentPage : ""
							}`}
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							className={`${styles.navItem} ${
								location.pathname === "/schedule" ? styles.currentPage : ""
							}`}
							to="/schedule"
						>
							Class Schedule
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.navItem} ${
								location.pathname === "/assignments" ? styles.currentPage : ""
							}`}
							to="/assignments"
						>
							Assignments
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.navItem} ${
								location.pathname === "/notes" ? styles.currentPage : ""
							}`}
							to="/notes"
						>
							Notes
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.navItem} ${
								location.pathname === "/about-me" ? styles.currentPage : ""
							}`}
							to="/about-me"
						>
							About Me
						</Link>
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
