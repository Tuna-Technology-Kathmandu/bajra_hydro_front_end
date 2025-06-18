import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

export const AdminNavbar = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className="ms-3">
          Dashboard
        </Navbar.Brand>

        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" target="_blank" rel="noopener noreferrer">
              Visit Site
            </Nav.Link>

            <NavDropdown
              title={
                <span>
                  <PersonCircle size={24} />
                </span>
              }
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/dashboard/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
