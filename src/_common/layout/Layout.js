import { Container } from "@material-ui/core";
import React from "react";
import { useAuth } from "../../store";
import AppBar from "../app-bar/AppBar";

export default function Layout({ children }) {
  const isLoggedIn = useAuth((state) => !!state?.profile?.token);
  
  return (
    <>
      {isLoggedIn && <AppBar />}
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
