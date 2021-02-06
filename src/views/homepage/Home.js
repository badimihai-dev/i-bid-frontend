import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRoutes } from "../../constants";

export default function Home() {
  const history = useHistory();

  return (
    <div>
      <Typography>Welcome to iBid!</Typography>
      <Button onClick={() => history.push(BrowserRoutes.Default.Login)}>
        Login
      </Button>
      <Button onClick={() => history.push(BrowserRoutes.Default.Register)}>
        Register
      </Button>
    </div>
  );
}
