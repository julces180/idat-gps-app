import React from "react";
import { MapComponent } from "./MapComponent";
import { Navbar, Nav } from "react-bootstrap"; // Importa Navbar y Nav
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Asegúrate de importar el CSS global

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar bg-dark text-white">
        <Navbar bg="bg-dark" variant="dark" className="flex-column">
          <Navbar.Brand href="#home">Idat GPS</Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link href="#/action-1">Sedes</Nav.Link>
            <Nav.Link href="#/action-2">Lugares de interés cercanos</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="content">
        <MapComponent />
      </div>
    </div>
  );
};

export default App;