import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Banner from "../components/Banner";

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
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
