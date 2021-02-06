import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { StyledWrapper, StyledLogo } from "./Register.style";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRegister } from "../../api";
import { Link, useHistory } from "react-router-dom";
import { BrowserRoutes } from "../../constants";

export default function Register() {
  const history = useHistory();
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [signup, { status: signupStatus, error: signupError }] = useRegister();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    signup(formData);
  };

  return (
    <StyledWrapper>
      <Box
        width="300px"
        display="flex"
        flexDirection="column"
        style={{ gap: "20px" }}
      >
        <Box textAlign="center">
          <StyledLogo
            onClick={() => history.push(BrowserRoutes.Default.Home)}
          />
        </Box>
        <Box display="flex">
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
        </Box>
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
        {signupError?.response?.data?.message && (
          <Typography color="error">
            {signupError.response.data.message}
          </Typography>
        )}
        <Button
          variant="outlined"
          style={{ margin: "auto" }}
          onClick={handleSubmit(onSubmit)}
        >
          {signupStatus === "loading" ? (
            <CircularProgress />
          ) : (
            <Typography>Register</Typography>
          )}
        </Button>
        <Box textAlign="center">
          <Typography>
            Already have an account? Go to{" "}
            <Link to={BrowserRoutes.Default.Login}>sign in</Link>
          </Typography>
        </Box>
      </Box>
    </StyledWrapper>
  );
}
