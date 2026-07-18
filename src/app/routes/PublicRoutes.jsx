// app/routes/PublicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  return <Outlet />;
}
