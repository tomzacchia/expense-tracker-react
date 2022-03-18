import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function PasswordControlled({ control, sx }) {
  return (
    <Controller
      name="password"
      control={control}
      defaultValue=""
      rules={{
        required: "password is required",
        minLength: {
          value: 8,
          message: "Password must at least 8 characters",
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="password"
          placeholder="password"
          type="password"
          variant="outlined"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          sx={sx}
        />
      )}
    />
  );
}

export default PasswordControlled;
