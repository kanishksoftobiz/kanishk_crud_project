import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar
          bg="black"
          variant="dark"
          expand="lg"
          // collapsOnSelect
        >
          <Container>
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>
                  <i className="fas fa-home fa-mb"></i> Home
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Brand>CRUD APPLICATION</Navbar.Brand>
            <Nav>
              <LinkContainer to="/adduser">
                <Nav.Link>
                  <i className="fas fa-plus fa-mb"></i> Add User
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  );
};

export default Header;
