import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar
        expand="lg"
        bg="primary"
        variant="dark"
        className="shadow-sm mb-4"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-white">
            Horavi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto gap-2">
              <Nav.Link href="#" className="fw-semibold text-white">
                Agendar
              </Nav.Link>
              <Nav.Link href="#" className="fw-semibold text-white">
                Perfiles
              </Nav.Link>
              <Nav.Link href="#" className="fw-semibold text-white">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
