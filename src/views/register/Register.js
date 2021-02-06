import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { StyledWrapper } from "./Register.style";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <StyledWrapper>
      <Box
        width="300px"
        display="flex"
        flexDirection="column"
        style={{ gap: "20px" }}
      >
        <TextField
          helperText={errors.firstName?.message}
          error={!!errors.firstName?.message}
          name="firstName"
          variant="outlined"
          placeholder="Enter first name"
          inputRef={register({ required: "Field is required" })}
          label="First name"
        />
        <TextField
          helperText={errors.lastName?.message}
          error={!!errors.lastName?.message}
          name="lastName"
          variant="outlined"
          placeholder="Enter last name"
          inputRef={register({ required: "Field is required" })}
          label="Last name"
        />
        <TextField
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          name="email"
          variant="outlined"
          placeholder="Enter email"
          inputRef={register({ required: "Field is required" })}
          label="Email"
        />
        <Box display="flex" alignItems="center">
          <TextField
            helperText={errors.password?.message}
            error={!!errors.password?.message}
            name="password"
            variant="outlined"
            placeholder="Enter password"
            inputRef={register({ required: "Field is required" })}
            label="Password"
            type={hiddenPassword ? "password" : "text"}
          />
          <Button onClick={() => setHiddenPassword(!hiddenPassword)}>
            <Typography variant="body1">{`${
              hiddenPassword ? "Hide" : "Show"
            }`}</Typography>
          </Button>
        </Box>
        <Button
          variant="outlined"
          style={{ margin: "auto" }}
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>
      </Box>
    </StyledWrapper>
  );
}
