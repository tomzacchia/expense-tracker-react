import { Route } from "react-router-dom";

import PublicOutlet from "~/components/PublicOutlet";
import HomePage from "~/pages/homepage/Homepage";
import AuthLayout from "~/features/auth/components/AuthLayout";
import Login from "~/pages/auth/Login";
import Signup from "~/pages/auth/Signup";
import ResetPassword from "~/pages/auth/ResetPassword";

const publicRoutes = (
  <>
    <Route path="/" element={<PublicOutlet />}>
      <Route index element={<HomePage />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
    </Route>
  </>
);

export default publicRoutes;
