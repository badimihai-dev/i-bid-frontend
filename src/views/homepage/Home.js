import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRoutes } from "../../constants";
import Particles from "react-particles-js";
import { StyledLogo } from "../login/Login.style";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <Box
        position="fixed"
        height="100vh"
        width="100vw"
        overflow="hidden"
        left="0"
        top="0"
      >
        <Particles
          params={{
            particles: {
              color: "#333",
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </Box>
      <Box
        position="fixed"
        height="100vh"
        width="100vw"
        left="0"
        top="0"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign="center">
          <Box display="flex" alignItems="center">
            <Typography variant="h2">Welcome to</Typography>
            <StyledLogo />
          </Box>
          <Box maxWidth="500px" textAlign="center" mb={3} mt={-5}>
            <Typography variant="h5">
              A process of buying and selling goods or services by offering them
              up for bid
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(BrowserRoutes.Default.Login)}
          >
            <Typography variant="h6" color="#fff">
              Get started now!
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
}
