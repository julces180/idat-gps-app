import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" className="sidebar" expand="lg">
      <Navbar.Brand href="#home">Idat GPS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Sedes" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Sede San Juan</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sede Otra sede...</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Lugares de interés" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">Lugar 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Lugar 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Rutas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/4.1">¿Cómo llego?</NavDropdown.Item>
          </NavDropdown>
          <Button variant="danger" className="logout-button" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;