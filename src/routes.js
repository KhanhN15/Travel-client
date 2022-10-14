import { Navigate, useRoutes } from "react-router-dom";
import Authentication from "./pages/Authen";

import Home from "./pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Authentication />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
