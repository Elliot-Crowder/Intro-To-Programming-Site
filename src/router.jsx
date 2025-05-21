import { createBrowserRouter } from "react-router";
import HomePage from "./pages/Home";
import App from "./App";

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

export default router;
