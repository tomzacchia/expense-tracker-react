import { Navigate, Outlet } from "react-router-dom";

function PublicOutlet() {
  const isSignedIn = localStorage.getItem("signedIn");

  return isSignedIn ? <Navigate to="/app/dashboard" replace /> : <Outlet />;
}

export default PublicOutlet;
