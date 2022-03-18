import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Grid, Typography } from "@mui/material";

import { login } from "~/features/auth";
import EmailControlled from "~/components/EmailControlled";
import PasswordControlled from "~/components/PasswordControlled";
import Link from "@mui/material/Link";

const AUTH_ERRORS_CODE_MAP = {
  "auth/wrong-password": "Wrong password or username, please try again",
  "auth/user-not-found": "Sorry, we couldn't find an account with that email.",
  "auth/too-many-requests":
    "Sorry, you've made too many attempts. Please try again later.",
};

export const LoginForm = ({ onSuccess }) => {
  const [error, setError] = useState(false);
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  async function loginHandler({ email, password }) {
    try {
      await login(email, password);
      onSuccess();
    } catch (error) {
      setError(AUTH_ERRORS_CODE_MAP[error.code]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      style={{
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {error && (
        <Typography sx={{ mb: 2, color: "error.main" }}>{error}</Typography>
      )}

      <EmailControlled control={control} sx={{ mb: 4 }} />
      <PasswordControlled control={control} sx={{ mb: 2 }} />

      <Typography sx={{ mb: 4 }}>
        Forgot Password?
        <Link
          sx={{ ml: 1 }}
          underline="none"
          onClick={() => navigate("/auth/reset-password")}
        >
          Reset
        </Link>
      </Typography>

      <Button color="secondary" type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
