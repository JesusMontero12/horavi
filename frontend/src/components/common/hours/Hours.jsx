import { Clock } from "lucide-react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Hours = ({ items }) => {
  const { selectedTime, setSelectedTime, availableHours } = items;
  return (
    <>
      {/* Horarios disponibles */}

      <Card className="shadow-lg border-0 rounded-4">
        <Card.Header className="bg-primary text-white fw-bold d-flex align-items-center gap-2 fs-5 py-3">
          <Clock size={22} /> Horarios disponibles
        </Card.Header>
        <Card.Body className="p-4">
          <Row className="g-3">
            {availableHours?.map((hour) => (
              <Col xs={6} key={hour}>
                <Button
                  variant={
                    selectedTime === hour ? "primary" : "outline-primary"
                  }
                  className="w-100 py-2 rounded-pill fw-semibold"
                  onClick={() => setSelectedTime(hour)}
                >
                  {hour}
                </Button>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Hours;
