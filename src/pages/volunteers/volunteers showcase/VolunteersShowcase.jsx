import VolunteerCard from "./VolunteerCard";
import PropTypes from "prop-types";

const VolunteersShowcase = ({ volunteers }) => {
  return (
    <div>
      {/* mapping all volunteers */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.volunteerId} volunteer={volunteer}></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

VolunteersShowcase.propTypes = {
  volunteers: PropTypes.array,
};

export default VolunteersShowcase;
