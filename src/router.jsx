import { createHashRouter } from "react-router";
import HomePage from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "schedule", element: <Schedule /> },
      { path: "assignments", element: <Assignments /> },
    ],
  },
]);

export default router;
