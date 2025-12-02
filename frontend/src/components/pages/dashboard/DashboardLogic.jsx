import { useState } from "react";
import Dashboard from "./Dashboard.jsx";

const DashboardLogic = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPro, setSelectedPro] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // datos cliente
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  let data = {
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
  };
  return (
    <>
      <Dashboard items={data} />
    </>
  );
};

export default DashboardLogic;
