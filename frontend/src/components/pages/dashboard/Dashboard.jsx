import { Col, Container, Row } from "react-bootstrap";
import CalendarLogic from "../../common/calendar/CalendarLogic.jsx";
import HoursLogic from "../../common/hours/HoursLogic.jsx";
import CustomerInformationLogic from "../../common/customerinformation/CustomerInformationLogic.jsx";
import ProfilesLogic from "../../common/profiles/ProfilesLogic.jsx";

const Dashboard = () => {
  return (
    <>
      <Container>
        <h2 className="text-center mb-4 fw-bold display-6">Agenda tu Cita</h2>

        {/* Profesionales dinámicos */}
        <ProfilesLogic />

        <Row>
          {/* Selección de fecha */}
          <Col>
            <CalendarLogic />
          </Col>
          {/* Horarios disponibles */}
          <Col>
            <HoursLogic />
          </Col>
          {/* Información del cliente */}
          <Col>
            <CustomerInformationLogic />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
