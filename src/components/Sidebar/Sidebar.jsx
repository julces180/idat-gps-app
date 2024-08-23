import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white">
      <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand href="#home" className="text-white">
          Idat GPS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <NavDropdown title="Sedes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Sede 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Sede 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Lugares de interés" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3">Lugar 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/4">Lugar 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;