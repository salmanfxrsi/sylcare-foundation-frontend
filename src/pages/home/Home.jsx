import AboutUs from "./About Us/AboutUs";
import FoundingCouncilShowcase from "./Founding Council Showcase/FoundingCouncilShowcase";
import OurWorkCategories from "./Our Work Category/OurWorkCategories";

const Home = () => {
  return (
    <div>
      {/* Our Work Categories */}
      <div className="w-11/12 lg:container mx-auto my-24 flex justify-center">
        <OurWorkCategories></OurWorkCategories>
      </div>
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
