import { useLocation, Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
  let location = useLocation();

  const isSignedIn = localStorage.getItem("signedIn");

  return isSignedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateOutlet;
