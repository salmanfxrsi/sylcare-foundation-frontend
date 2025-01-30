import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Banner from "../components/Banner";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/LfCqnvW/eco-concept-with-group-volunteers.jpg)",
        }}
      >
        <div className="hero-overlay">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      {/* Outlet */}
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
