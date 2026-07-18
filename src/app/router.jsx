import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../features/auth";
import { LandingPage } from "../features/landing";
import { PublicRoute } from "./routes/PublicRoutes";
import { PublicLayout } from "../shared/layouts/PublicLayout";
import { NotFoundPage } from "../shared/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: "/", element: <LandingPage /> },
          { path: "/login", element: <LoginPage /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
