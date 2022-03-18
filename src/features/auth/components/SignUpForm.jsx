import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";

import PasswordControlled from "~/components/PasswordControlled";
import EmailControlled from "~/components/EmailControlled";
import { signup } from "../api";

const SIGNUP_ERROS_MAP = {
  "auth/email-already-in-use": "An acount with this email already exists",
};

function SingupForm({ onSuccess }) {
  const [authErrorMessage, setAuthErrorMessage] = useState();
  const { handleSubmit, control, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  async function signupHandler({ email, password }) {
    try {
      setAuthErrorMessage(null);
      await signup(email, password);
      onSuccess();
    } catch (error) {
      console.log(SIGNUP_ERROS_MAP[error.code]);
      setAuthErrorMessage(SIGNUP_ERROS_MAP[error.code]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(signupHandler)}
      style={{
        marginBottom: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {authErrorMessage && (
        <Typography sx={{ mb: 2, color: "error.main" }}>
          {authErrorMessage}
        </Typography>
      )}

      <EmailControlled control={control} sx={{ mb: 2 }} />
      <PasswordControlled control={control} sx={{ mb: 2 }} />

      <Controller
        name="passwordConfirm"
        control={control}
        defaultValue=""
        rules={{
          required: "confirmation password is required",
          validate: (value) =>
            value === password.current || "passwords must match",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="confirm password"
            placeholder="confirm password"
            type="password"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            sx={{ mb: 4 }}
          />
        )}
      />

      <Button color="secondary" type="submit" variant="contained">
        Create Account
      </Button>
    </form>
  );
}

export default SingupForm;
