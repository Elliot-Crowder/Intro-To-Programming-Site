import { createHashRouter } from "react-router";
import HomePage from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";
import Notes from "./pages/Notes";
import AboutMe from "./pages/AboutMe";
import CourseIntro from "./pages/notes/CourseIntro";
import NotesLayout from "./pages/NotesLayout";
import ArchitectureOverview from "./pages/notes/Architecture";
import Syntax from "./pages/notes/Syntax";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "schedule", element: <Schedule /> },
      { path: "assignments", element: <Assignments /> },
      {
        path: "notes",
        element: <NotesLayout />,
        children: [
          { index: true, element: <Notes /> },
          { path: "notes/course-intro", element: <CourseIntro /> },
          {
            path: "notes/architecture-overview",
            element: <ArchitectureOverview />,
          },
          { path: "notes/syntax", element: <Syntax /> },
        ],
      },
      { path: "about-me", element: <AboutMe /> },
    ],
  },
]);

export default router;
