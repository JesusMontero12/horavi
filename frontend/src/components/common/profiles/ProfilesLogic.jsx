import Profiles from "./Profiles.jsx";
import { useBooking } from "../../../context/BookingContext.jsx";

const ProfilesLogic = () => {
  const { selectedPro, setSelectedPro, selectedService, setSelectedService } =
    useBooking();

  let data = {
    selectedPro,
    setSelectedPro,
    selectedService,
    setSelectedService,
  };
  return (
    <>
      <Profiles items={data} />
    </>
  );
};

export default ProfilesLogic;
