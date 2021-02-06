import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRoutes } from "../../constants";
import { useAuth } from "../../store";
import { StyledAppBar } from "./AppBar.style";

export default function AppBar() {
  const history = useHistory();
  const { profile, resetProfile } = useAuth();

  const logout = () => {
    resetProfile();
    history.push(BrowserRoutes.Default.Login);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="inherit">Hello, {profile.firstName}</Typography>
          <Button onClick={logout}>
            <Typography color="error">Logout</Typography>
          </Button>
        </Box>
      </Container>
    </StyledAppBar>
  );
}
