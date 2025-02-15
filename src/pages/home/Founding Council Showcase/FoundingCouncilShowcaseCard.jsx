import PropTypes from "prop-types";

const FoundingCouncilShowcaseCard = ({ volunteer }) => {
  const { name, image, position } = volunteer;

  return (
    <div className="p-8 lg:p-16 rounded-xl bg-linear-to-b from-white to-[#9FDD3E] mx-6 cursor-grab">
      <p className="text-gray-600 font-medium font-sans">
        CURE is a grassroots organization promoting community resilience and
        empowerment through education, advocacy, and support, aiming to create a
        more equitable and compassionate world for all members.CURE is a
        grassroots organization promoting community resilience and empowerment
        through education, advocacy, and support, aiming to create a more
        equitable and compassionate world for all members.
      </p>
      {/* Volunteer Info */}
      <div className="flex items-center gap-3 mt-6 justify-center">
        {/* Volunteer Image */}
        <div>
          <img className="w-12 h-12 rounded-full" src={image ? image : "https://i.ibb.co.com/vvK7vk5Z/no-dp-mood-off-9.jpg"} alt="" />
        </div>
        {/* Volunteer Identity */}
        <div>
          <h1 className="text-gray-600 font-bold">{name}</h1>
          <h5 className="text-gray-600 font-medium">{position}</h5>
        </div>
      </div>
    </div>
  );
};

FoundingCouncilShowcaseCard.propTypes = {
  volunteer: PropTypes.array,
};

export default FoundingCouncilShowcaseCard;
