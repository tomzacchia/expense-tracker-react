import { Grid, Typography, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import { LoginForm } from "~/features/auth/components/LoginForm";

function Login(props) {
  const navigate = useNavigate();
  let location = useLocation();

  function replaceRouteWithPrev() {
    let pathBeforeRedirect = location.state?.from?.pathname || "/app/dashboard";
    navigate(pathBeforeRedirect, { replace: true });
  }

  return (
    <>
      <Typography
        color="secondary"
        variant="h4"
        sx={{ mb: 2, fontWeight: 900 }}
      >
        Log In
      </Typography>
      <Typography variant="inherit" sx={{ mb: 4, color: "#898989" }}>
        Enter your email and password to access your account
      </Typography>

      <LoginForm onSuccess={replaceRouteWithPrev} />

      <Typography>
        Don't have an account?
        <Link
          sx={{ ml: 2 }}
          underline="none"
          onClick={() => navigate("/auth/signup")}
        >
          Sign up
        </Link>
      </Typography>
    </>
  );
}

export default Login;
