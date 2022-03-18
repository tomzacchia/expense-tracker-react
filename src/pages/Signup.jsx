import React from "react";
import { LoginForm } from "~/features/auth/components/LoginForm";
import SignUpForm from "~/features/auth/components/SignUpForm";
import { Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();

  return (
    <>
      <Typography
        color="secondary"
        variant="h4"
        sx={{ mb: 2, fontWeight: 900 }}
      >
        Sign Up
      </Typography>

      <Typography sx={{ mb: 4 }}>
        Already have an account?
        <Link
          style={{
            textDecoration: "none",
            color: "blue",
            marginLeft: "8px",
            padding: "12.5px 0",
          }}
          to="../login"
        >
          Sign in
        </Link>
      </Typography>

      <SignUpForm onSuccess={() => navigate("/app")} />
    </>
  );
}
export default Signup;
