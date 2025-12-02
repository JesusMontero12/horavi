import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.jsx";
import NavbarComponent from "./navbar/NavbarComponent.jsx";

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
