import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Stepsbar from "./stepsbar";

function Layout() {
  return (
    <>
      <Header />
      <Stepsbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;