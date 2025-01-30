import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/volunteers">Volunteers</Link>
    </>
  );

  return (
    <div className="navbar w-11/12 lg:container mx-auto text-white mt-1">
      <div className="flex-1">
        <Link to="/" className="font-black lg:text-2xl uppercase">
          SYLCARE Foundation
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1 flex gap-6 font-black">
          {links}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
