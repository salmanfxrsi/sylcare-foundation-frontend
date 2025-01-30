import instagram from "../assets/social icons/insta.png";
import facebook from "../assets/social icons/facebook.png";
import linkedin from "../assets/social icons/linkedin.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-11/12 lg:container mx-auto">
      <h1 className="font-black text-5xl text-white mt-24 uppercase">
        There is a Great Value For <br /> Doing Good to Others
      </h1>
      <div className="flex items-center gap-4 mt-8">
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
    </div>
  );
};

export default Banner;
