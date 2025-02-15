import instagram from "../../assets/social icons/insta.png";
import facebook from "../../assets/social icons/facebook.png";
import linkedin from "../../assets/social icons/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-linear-to-b from-white to-[#9FDD3E] pb-4">
        <footer className="footer sm:footer-horizontal text-gray-600 p-10 container mx-auto">
          <aside>
            <img className="w-16" src="/favicon.png" alt="" />
            <div>
              <h3 to="/" className="font-black lg:text-2xl uppercase">
                SYLCARE Foundation
              </h3>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                SYLCARE Foundation LTD.
              </p>
            </div>
          </aside>
          <nav>
            <h6 className="text-gray-600 text-lg font-bold uppercase mb-1">
              Social
            </h6>
            <div className="flex items-center gap-2">
              <Link to="https://www.facebook.com/sylcarefoundation.org">
                <img className="w-12" src={facebook} alt="" />
              </Link>
              <Link to="https://www.instagram.com/sylcarefoundation.org.bd?igsh=YzljYTk1ODg3Zg%3D%3D">
                <img className="w-12" src={instagram} alt="" />
              </Link>
              <Link>
                <img className="w-12" src={linkedin} alt="" />
              </Link>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
