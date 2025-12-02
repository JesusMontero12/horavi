import Swal from "sweetalert2";
import { CustomerInformation } from "./CustomerInformation.jsx";
import { useBooking } from "../../../context/BookingContext.jsx";

const CustomerInformationLogic = () => {
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
  } = useBooking();

  function handleConfirm() {
    if (!nombre.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Nombre requerido",
        text: "Por favor ingresa nombre y apellido.",
      });
    }

    if (!celular.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Celular requerido",
        text: "Por favor ingresa número de celular.",
      });
    }

    if (!selectedTime) {
      return Swal.fire({
        icon: "error",
        title: "Hora no seleccionada",
        text: "Por favor selecciona una hora.",
      });
    }

    if (!selectedPro) {
      return Swal.fire({
        icon: "error",
        title: "Profesional no seleccionado",
        text: "Por favor selecciona un profesional.",
      });
    }

    if (!selectedService) {
      return Swal.fire({
        icon: "error",
        title: "Servicio no seleccionado",
        text: "Por favor selecciona un servicio.",
      });
    }

    const payload = {
      nombre,
      celular,
      email: email || null,
      fecha: date?.toISOString?.() ?? String(date),
      hora: selectedTime,
      profesional: selectedPro,
      servicio: selectedService,
    };

    // Alert de confirmación
    Swal.fire({
      icon: "success",
      title: "Cita confirmada",
      html: `
      <strong>${nombre} tu cita es el:</strong><br>
      ${date?.toLocaleDateString()} a las <strong>${selectedTime}</strong><br><br>
      Con <strong>${selectedPro.nombre}</strong><br>
      Servicio: <strong>${selectedService.nombre}</strong><br>
      Precio: <strong>$${selectedService.precio}</strong>
    `,
      confirmButtonText: "Perfecto",
    });
  }

  let data = {
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
  };

  return (
    <>
      <CustomerInformation items={data} />
    </>
  );
};

export default CustomerInformationLogic;
