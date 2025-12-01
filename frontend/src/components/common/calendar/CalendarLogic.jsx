import { useState } from "react";
import Calendar from "./Calendar.jsx";

const CalendarLogic = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Calendar items={{ date, setDate }} />
    </>
  );
};

export default CalendarLogic;
