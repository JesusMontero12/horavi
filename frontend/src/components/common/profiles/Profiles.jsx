import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { professionals } from "../../../data/PersonalMock";

const Profiles = ({ items }) => {
  const { selectedPro, setSelectedPro, selectedService, setSelectedService } =
    items;

  return (
    <>
      {/* Profesionales dinámicos */}
      <Row className="g-3">
        {professionals.map((pro) => (
          <Col md={4} key={pro.id}>
            <Card
              className={`d-flex flex-column align-items-center shadow-sm p-3 text-center border-0 hover-shadow ${
                selectedPro?.id === pro.id ? "border-2" : ""
              }`}
              style={{ borderRadius: 12 }}
            >
              <img
                src={pro.img}
                className="rounded-circle mb-3"
                width="90"
                height="90"
                alt={pro.nombre}
              />
              <h5 className="fw-bold mb-1">{pro.nombre}</h5>
              <p className="text-muted mb-2">{pro.especialidad}</p>
              <Button
                variant={
                  selectedPro?.id === pro.id ? "primary" : "outline-primary"
                }
                className="rounded-pill px-4 fw-semibold w-100"
                onClick={() => {
                  setSelectedPro(pro);
                  setSelectedService(null);
                }}
              >
                {selectedPro?.id === pro.id ? "Seleccionado" : "Elegir"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedPro && (
        <div className="mt-4 p-3 bg-light rounded-4 border shadow-sm">
          <h5 className="fw-bold mb-3">Servicios de {selectedPro.nombre}</h5>
          {selectedPro.servicios.map((srv) => (
            <div
              key={srv.id}
              className="d-flex justify-content-between align-items-center border-bottom py-2"
            >
              <div>
                <div className="fw-semibold">{srv.nombre}</div>
                <div className="text-muted small">Duración: 30 min</div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="text-muted">${srv.precio}</div>
                <Button
                  size="sm"
                  variant={
                    selectedService?.id === srv.id
                      ? "primary"
                      : "outline-primary"
                  }
                  className="rounded-pill"
                  onClick={() => setSelectedService(srv)}
                >
                  {selectedService?.id === srv.id ? "Seleccionado" : "Elegir"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Profiles;
