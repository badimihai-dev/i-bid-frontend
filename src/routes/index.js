import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { useAuth } from "../store";
import DefaultRoutes from "./Default";
import IsAuthRoutes from "./IsAuth";

export default function Routes() {
  const history = useHistory();
  const [routes, setRoutes] = useState(DefaultRoutes);
  const isLoggedIn = useAuth((state) => !!state.profile.token);

  useEffect(() => {
    if (isLoggedIn) {
      history.push(BrowserRoutes.Auth.Home);
      setRoutes(IsAuthRoutes);
    } else {
      history.push(BrowserRoutes.Auth.Login);
      setRoutes(DefaultRoutes);
    }
  }, [isLoggedIn, history, setRoutes]);

  return (
    <Switch>
      {routes}
      <Route component={NotFound} />
    </Switch>
  );
}

const NotFound = () => {
  const isLoggedIn = useAuth((state) => !!state.profile.token);
  const history = useHistory();

  return (
    <Container>
      <Box>
        <Typography>Oops!</Typography>
        <Typography>This page was not found!</Typography>
        <Button
          onClick={() =>
            isLoggedIn
              ? history.push(BrowserRoutes.Auth.Home)
              : history.push(BrowserRoutes.Default.Home)
          }
        >
          Go back!
        </Button>
      </Box>
    </Container>
  );
};
