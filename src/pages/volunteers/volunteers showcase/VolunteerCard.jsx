import PropTypes from "prop-types";

const VolunteerCard = ({ volunteer }) => {
  const { image, name, position, mobile, email } = volunteer;

  return (
    <div className="h-360px w-[360px] shadow-xl">
      <img
        className="w-full h-[360px] object-top"
        src={
          image ? image : "https://i.ibb.co.com/vvK7vk5Z/no-dp-mood-off-9.jpg"
        }
        alt=""
      />
      <div className="p-8">
        <h1 className="text-[#427212] font-bold text-xl">{name}</h1>
        <h3 className="mt-1 font-medium">{position}</h3>
        {/* <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p> */}
        <div className="mt-2">
          {/* Email */}
          <p className="font-bold">
            Email: <span className="font-medium">{email}</span>
          </p>
          {/* Number */}
          <p className="font-bold">
            Phone: <span className="font-medium">{mobile}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

VolunteerCard.propTypes = {
  volunteer: PropTypes.object,
};

export default VolunteerCard;
