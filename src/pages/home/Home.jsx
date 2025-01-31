import AboutUs from "./About Us/AboutUs";
import FoundingCouncilShowcase from "./Founding Council Showcase/FoundingCouncilShowcase";

const Home = () => {
  return (
    <div>
      {/* About Us */}
      <div className="my-24">
        <AboutUs></AboutUs>
      </div>
      {/* Founding Council Showcase */}
      <div className="container mx-auto my-24">
        <FoundingCouncilShowcase></FoundingCouncilShowcase>
      </div>
    </div>
  );
};

export default Home;
