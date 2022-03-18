import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

/**
 *
 * @param {*} control Control obj from react-hook-form
 * @returns Component
 */
function EmailControlled({ control, sx }) {
  return (
    <Controller
      name="email"
      control={control}
      defaultValue=""
      rules={{
        required: "email is required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "incorrect email format",
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label="email"
          placeholder="name@company.com"
          type="text"
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

export default EmailControlled;
