import { createHashRouter } from "react-router";
import HomePage from "./pages/Home";
import AppLayout from "./pages/AppLayout";
import Schedule from "./pages/Schedule";
import Assignments from "./pages/Assignments";
import Notes from "./pages/Notes";
import AboutMe from "./pages/AboutMe";

const router = createHashRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "schedule", element: <Schedule /> },
			{ path: "assignments", element: <Assignments /> },
			{ path: "notes", element: <Notes /> },
			{ path: "about-me", element: <AboutMe /> },
		],
	},
]);

export default router;
