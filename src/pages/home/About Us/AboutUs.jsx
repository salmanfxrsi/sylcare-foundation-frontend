import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const AboutUs = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/WQh3cYS/What-are-the-most-breathtaking-natural-attractions-in-Sylhet.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      {/* Content Section */}
      <div className="w-11/12 py-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap- items-center gap-12">
        {/* Image Section */}
        <div className="bg-white pt-4 pl-3 rounded-full w-[300px] mx-auto">
          <img className="" src={logo} alt="" />
        </div>
        {/* Text Section */}
        <div className="text-white text-center lg:text-left">
          <h2 className="font-bold text-lg uppercase mb-2">- About Us</h2>
          <h1 className="font-bold text-3xl mb-4">
            We Raise Our Voice For Humanity
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            non facilisis sem. Cras vel consequat eros, sed scelerisque nisi.
            Curabitur euismod quam eu consectetur faucibus. Duis sed iaculis
            mauris. Etiam id purus tincidunt, scelerisque diam quis, pretium
            purus. Sed id felis viverra, scelerisque velit non, euismod nisi.
            Phasellus ac diam a enim convallis vestibulum.
          </p>
          <Link className="bg-[#9FDD3E] px-4 py-1 rounded-2xl font-black uppercase hover:bg-gray-500 duration-300">
            Explore Our Volunteers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
