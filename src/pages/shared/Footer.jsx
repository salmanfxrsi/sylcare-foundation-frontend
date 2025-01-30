import instagram from "../../assets/social icons/insta.png";
import facebook from "../../assets/social icons/facebook.png";
import linkedin from "../../assets/social icons/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-neutral pb-4">
        <footer className="footer sm:footer-horizontal text-neutral-content p-10 container mx-auto">
          <aside>
            <img className="w-16" src="/favicon.png" alt="" />
            <p>
              <h3 to="/" className="font-black lg:text-2xl uppercase">
                SYLCARE Foundation
              </h3>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                SYLCARE Foundation LTD.
              </p>
            </p>
          </aside>
          <nav>
            <h6 className="text-white text-lg font-bold uppercase mb-1">
              Social
            </h6>
            <div className="flex items-center gap-2">
              <Link>
                <img className="w-12" src={facebook} alt="" />
              </Link>
              <Link>
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
