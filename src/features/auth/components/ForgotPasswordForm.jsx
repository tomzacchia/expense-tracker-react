import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";

import EmailControlled from "~/components/EmailControlled";
import { resetPassword } from "../api";

const AUTH_ERRORS_CODE_MAP = {
  "auth/user-not-found": "Sorry, we couldn't find an account with that email.",
  "auth/too-many-requests":
    "Sorry, you've made too many attempts. Please try again later.",
};

function ForgotPasswordForm({ onSuccess }) {
  const { handleSubmit, control } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  async function submitHandler({ email }) {
    try {
      await resetPassword(email);
      setErrorMessage("");
      onSuccess("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {errorMessage && (
        <Typography sx={{ mb: 2, color: "error.main" }}>
          {errorMessage}
        </Typography>
      )}

      <EmailControlled control={control} sx={{ mb: 4 }} />

      <Button color="secondary" type="submit" variant="contained">
        Reset Password
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
