import Hours from "./Hours.jsx";
import { useBooking } from "../../../context/BookingContext.jsx";

const HoursLogic = () => {
  const { selectedTime, setSelectedTime } = useBooking();
  const availableHours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  let data = { selectedTime, setSelectedTime, availableHours };
  return (
    <>
      <Hours items={data} />
    </>
  );
};

export default HoursLogic;
