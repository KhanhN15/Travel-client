import { Navigate, useRoutes } from "react-router-dom";
import Authentication from "./pages/Authen";
import DetailHotel from "./pages/DetailHotel";

import Home from "./pages/Home";
import ListHotel from "./pages/ListHotel";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list-room",
      element: <ListHotel />,
    },
    {
      path: "/detail-room",
      element: <DetailHotel />,
    },
    {
      path: "/login",
      element: <Authentication />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
