import PrivateOutlet from "~/components/PrivateOutlet";
import { Outlet, Route, useNavigate } from "react-router-dom";

import BottomNav from "~/components/BottomNav";
import { dashboardRoutes } from "./dashboardRoutes";
import { logout } from "~/features/auth/api";
import { Button } from "@mui/material";

const appRoutes = (
  <Route path="app" element={<PrivateOutlet />}>
    <Route element={<AppLayout />}>
      {dashboardRoutes}
      <Route path="stats" element={<h1> stats </h1>} />
      <Route path="profile" element={<TestProfile />} />
    </Route>
  </Route>
);

export default appRoutes;

function TestProfile() {
  const navigate = useNavigate();

  function logoutHandler() {
    logout().then((res) => {
      navigate("/");
    });
  }

  return (
    <Button variant="contained" onClick={logoutHandler}>
      logout
    </Button>
  );
}

function AppLayout() {
  return (
    <>
      <div style={{ height: "calc(100vh - 72px)", overflow: "scroll" }}>
        <Outlet />
      </div>
      <BottomNav />
    </>
  );
}
