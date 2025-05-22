import Header from "../components/Header";
import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <>
      <Header></Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
