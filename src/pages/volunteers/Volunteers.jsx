import useVolunteers from "../../hooks/useVolunteers";
import VolunteersShowcase from "./volunteers showcase/VolunteersShowcase";

const Volunteers = () => {
  const [isLoading, volunteers] = useVolunteers();

  if (isLoading) return;

  return (
    <div>
      {/* Volunteer Showcase */}
      <div className="w-11/12 lg:container mx-auto py-24 flex justify-center">
        <VolunteersShowcase volunteers={volunteers}></VolunteersShowcase>
      </div>
    </div>
  );
};

export default Volunteers;
