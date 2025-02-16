import useVolunteers from "../../hooks/useVolunteers";
import VolunteersShowcase from "./volunteers showcase/VolunteersShowcase";

const Volunteers = () => {
  const [isLoading, volunteers] = useVolunteers();

  if (isLoading) return;

  return (
    <div className="py-20">
      <h1 className="text-4xl uppercase mb-16 text-center font-semibold">
        ---Our Volunteers---
      </h1>
      {/* Volunteer Showcase */}
      <div className="w-11/12 lg:container mx-auto flex justify-center">
        <VolunteersShowcase volunteers={volunteers}></VolunteersShowcase>
      </div>
    </div>
  );
};

export default Volunteers;
