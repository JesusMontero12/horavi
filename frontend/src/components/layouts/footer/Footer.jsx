import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          background: "#f8f9fa",
          borderTop: "1px solid #eaeaea",
          padding: "20px 0",
          marginTop: "60px",
        }}
      >
        <Container className="text-center">
          <p className="m-0" style={{ color: "#6c757d", fontSize: "0.9rem" }}>
            © {new Date().getFullYear()} Horavi — Todos los derechos reservados.
          </p>

          <p
            className="m-0 mt-2"
            style={{ color: "#6c757d", fontSize: "0.85rem" }}
          >
            Desarrollado con ❤️ por MontCorp.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
