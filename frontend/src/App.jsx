import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout.jsx";
import DashboardLogic from "./components/pages/dashboard/DashboardLogic.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* variables globales para agendar citas */}
      <BookingProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardLogic />} />
          </Route>
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
