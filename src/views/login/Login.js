import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../../api";
import { BrowserRoutes } from "../../constants";
import { StyledLogo, StyledWrapper } from "./Login.style";

export default function Login() {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [signin, { status: signinStatus, error: signinError }] = useLogin();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    signin(formData);
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
          <StyledLogo />
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
        {signinError?.response?.data?.message && (
          <Typography color="error">
            {signinError.response.data.message}
          </Typography>
        )}
        <Button
          variant="outlined"
          style={{ margin: "auto" }}
          onClick={handleSubmit(onSubmit)}
        >
          {signinStatus === "loading" ? (
            <CircularProgress />
          ) : (
            <Typography>Login</Typography>
          )}
        </Button>

        <Box textAlign="center">
          <Typography>
            Don't have an account? Go to{" "}
            <Link to={BrowserRoutes.Default.Register}>sign up</Link>
          </Typography>
        </Box>
      </Box>
    </StyledWrapper>
  );
}
