import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/CartContext";

export default function Header() {
  const { handleOpen,cartQuantity } = useContext(ShoppingCartContext);
  return (
    <>
      <Navbar expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="store" as={NavLink}>
                Store
              </Nav.Link>
              <Nav.Link to="about" as={NavLink}>
                About
              </Nav.Link>
            </Nav>
            <button className="btn position-relative">
              <AiOutlineShoppingCart
                size={25}
                color="blue"
                style={{ cursor: "pointer" }}
                onClick={() => handleOpen(true)}
              />
              <h6 className="position-absolute top-0 end-100">
                <Badge bg="secondary">{cartQuantity()}</Badge>
              </h6>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
