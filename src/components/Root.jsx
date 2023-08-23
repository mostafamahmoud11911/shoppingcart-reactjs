import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import ShoppingCart from "./ShoppingCart";

export default function Root() {
  return (
    <>
      <Header />
      <Container>
        <ShoppingCart/>
        <Outlet />
      </Container>
    </>
  );
}
