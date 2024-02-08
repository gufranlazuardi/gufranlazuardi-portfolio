import Home from "@/pages";
import Experience from "@/pages/experience";

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
  ]);

  return <RouterProvider router={router} />;
}
