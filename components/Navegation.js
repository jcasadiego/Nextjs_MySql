import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function Navegation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>TIenda de Viveres</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="#home">Tu Tienda</Nav.Link>
          </Link>
          <NavDropdown title="Catalogo de Productos" id="basic-nav-dropdown">
            <Link href="/frutas">
              <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <Link href="/verduras">
              <NavDropdown.Item href="#action/3.1">Verduras</NavDropdown.Item>
            </Link>
          </NavDropdown>
          <Link href="/factura">
            <Nav.Link href="#factura">Factura</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};