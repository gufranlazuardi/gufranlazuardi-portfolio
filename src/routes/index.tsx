import Home from "@/pages";
import Contact from "@/pages/contact";
import Experience from "@/pages/experience";
import Project from "@/pages/project";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}
