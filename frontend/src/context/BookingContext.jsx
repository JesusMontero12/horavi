import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // horarios del profesional
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Datos y servicions del profesional
  const [selectedPro, setSelectedPro] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Datos del cliente
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  return (
    <BookingContext.Provider
      value={{
        date,
        setDate,
        selectedTime,
        setSelectedTime,

        selectedPro,
        setSelectedPro,
        selectedService,
        setSelectedService,

        nombre,
        setNombre,
        celular,
        setCelular,
        email,
        setEmail,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

// Hook personalizado
export const useBooking = () => useContext(BookingContext);
