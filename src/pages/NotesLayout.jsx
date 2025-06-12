import { Outlet } from "react-router";
import styles from "./NotesLayout.module.css";
export default function NotesLayout() {
  return (
    <>
      <h1 className={styles.introTitle}>Intro to Programming</h1>
      <Outlet></Outlet>
    </>
  );
}
