import { Button, Card, Form } from "react-bootstrap";

export const CustomerInformation = ({ items }) => {
  const {
    nombre,
    setNombre,
    celular,
    setCelular,
    email,
    setEmail,
    date,
    selectedTime,
    selectedPro,
    selectedService,
    handleConfirm,
  } = items;
  return (
    <>
      {/* Información del cliente */}

      <Card className="shadow-lg border-0 rounded-4">
        <Card.Header className="bg-primary text-white fw-bold fs-5 py-3">
          Información del cliente
        </Card.Header>
        <Card.Body className="p-4">
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="rounded-3"
              placeholder="Ej: Juan Pérez"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Número de celular</Form.Label>
            <Form.Control
              type="tel"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="rounded-3"
              placeholder="Ej: +56 9 1234 5678"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              Correo electrónico (opcional)
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-3"
              placeholder="Ej: correo@dominio.com"
            />
          </Form.Group>

          <div className="mt-4 p-3 bg-light rounded-4 border shadow-sm">
            <h5 className="fw-bold">Resumen de la cita</h5>
            <p className="mb-1">
              <strong>Día: </strong>
              {date?.toLocaleDateString()}
            </p>
            <p className="mb-0">
              <strong>Hora: </strong>
              {selectedTime || "No seleccionada"}
            </p>
            <p className="mb-0">
              <strong>Profesional: </strong>
              {selectedPro?.nombre || "No seleccionado"}
            </p>
            <p className="mb-0">
              <strong>Servicio: </strong>
              {selectedService?.nombre
                ? `${selectedService.nombre} - $${selectedService.precio}`
                : "No seleccionado"}
            </p>
          </div>

          <Button
            variant="success"
            className="w-100 mt-4 py-3 fs-5 rounded-pill fw-bold"
            onClick={handleConfirm}
          >
            Confirmar cita
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
