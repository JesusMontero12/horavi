import { Card } from "react-bootstrap";
import { CalendarSearch } from "lucide-react";
import DatePicker from "react-datepicker";

const Calendar = (items) => {
  const { date, setDate } = items;
  return (
    <>
      {/* Selección de fecha */}

      <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
        <Card.Header className="bg-primary text-white fw-bold d-flex align-items-center gap-2 fs-5 py-3">
          <CalendarSearch size={22} /> Selecciona una fecha
        </Card.Header>
        <Card.Body className="p-4 d-flex justify-content-center">
          <div className="rounded-3 border p-2 bg-white shadow-sm">
            <DatePicker selected={date} onChange={(d) => setDate(d)} inline />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Calendar;
