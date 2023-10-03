"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" href={"/"}>
          React-Next JS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/"} className="nav-link">
              Home
            </Link>
            <Link href={"/about"} className="nav-link">
              About Us
            </Link>
            <Link href={"/recipe"} className="nav-link">
              Recipe{" "}
            </Link>
            <Link href={"/more"} className="nav-link">
              More
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
