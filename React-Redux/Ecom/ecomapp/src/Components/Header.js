import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  const totalItemsInCart = useSelector((state) => state.products.cart);
  useEffect(() => {
    console.log(totalItemsInCart);
  }, [totalItemsInCart]);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Digi-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link>Cart:({totalItemsInCart.length})</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
