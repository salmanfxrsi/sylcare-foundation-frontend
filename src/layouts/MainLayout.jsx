import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Banner from "../components/Banner";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {/* Navbar */}
      <div
        className={`${pathname === "/" && "h-[600px]"} hero`}
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/LfCqnvW/eco-concept-with-group-volunteers.jpg)",
        }}
      >
        <div
          className={`${pathname !== "/" && "bg-white shadow-lg"} hero-overlay`}
        >
          <Navbar></Navbar>
          {pathname === "/" && <Banner></Banner>}
        </div>
      </div>
      {/* Outlet */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
