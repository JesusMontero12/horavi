import Calendar from "./Calendar.jsx";
import { useBooking } from "../../../context/BookingContext.jsx";

const CalendarLogic = () => {
  const { date, setDate } = useBooking();

  let data = { date, setDate };
  return (
    <>
      <Calendar items={data} />
    </>
  );
};

export default CalendarLogic;
