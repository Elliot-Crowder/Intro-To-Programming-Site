import { createHashRouter } from "react-router";
import HomePage from "./pages/Home";

const router = createHashRouter([
  { path: "/", element: <HomePage />, children: [] },
]);

export default router;
