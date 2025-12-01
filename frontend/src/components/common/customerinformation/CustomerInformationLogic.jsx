import { useState } from "react";
import { CustomerInformation } from "./CustomerInformation.jsx";

const CustomerInformationLogic = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    if (!nombre.trim()) return alert("Por favor ingresa nombre y apellido.");
    if (!celular.trim()) return alert("Por favor ingresa número de celular.");
    if (!selectedTime) return alert("Por favor selecciona una hora.");

    const payload = {
      nombre,
      celular,
      email: email || null,
      fecha: date?.toISOString?.() ?? String(date),
      hora: selectedTime,
    };

    console.log("Confirmando cita:", payload);
    alert(
      `Cita confirmada: ${nombre} — ${date?.toLocaleDateString()} ${selectedTime}`
    );
  };
  return (
    <>
      <CustomerInformation
        items={{
          handleConfirm,
          nombre,
          setNombre,
          celular,
          setCelular,
          email,
          setEmail,
          date,
          selectedTime,
        }}
      />
    </>
  );
};

export default CustomerInformationLogic;
