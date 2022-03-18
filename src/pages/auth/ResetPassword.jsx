import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ForgotPasswordForm from "~/features/auth/components/ForgotPasswordForm";

function ResetPassword(props) {
  const [emailSentFlag, setEmailSentFlag] = useState(false);

  function submitHandler() {
    setEmailSentFlag(true);
  }

  if (emailSentFlag) {
    return (
      <>
        <Typography
          color="secondary"
          variant="h5"
          textAlign="center"
          sx={{ mb: 2, fontWeight: 900 }}
        >
          Email has been sent!
        </Typography>

        <Typography
          textAlign="center"
          variant="inherit"
          sx={{ mb: 4, color: "#898989" }}
        >
          Please check your inbox and junk folders.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/auth/login"
          sx={{ py: 1, mt: 4, width: "100%", borderRadius: "24px" }}
        >
          Login
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        component={Link}
        to="/auth/login"
        sx={{ position: "fixed", top: "1rem", left: "1rem" }}
      >
        BACK
      </Button>

      <Typography
        color="secondary"
        variant="h4"
        sx={{ mb: 2, fontWeight: 900 }}
      >
        Forgot Password?
      </Typography>
      <Typography variant="inherit" sx={{ mb: 4, color: "#898989" }}>
        Enter your email and we'll send you a link to get back into your
        account.
      </Typography>

      <ForgotPasswordForm onSuccess={submitHandler} />
    </>
  );
}

export default ResetPassword;
