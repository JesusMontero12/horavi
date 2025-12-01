import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout.jsx";
import DashboardLogic from "./components/pages/dashboard/DashboardLogic.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardLogic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
