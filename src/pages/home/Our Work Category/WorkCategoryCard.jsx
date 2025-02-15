import PropTypes from "prop-types";

const WorkCategoryCard = ({ image, name, description }) => {
  return (
    <div className="w-[267px]">
      <img src={image} alt="" />
      <h1 className="font-bold text-center text-lg">{name}</h1>
      <p className="text-center mt-2">{description}</p>
    </div>
  );
};

WorkCategoryCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default WorkCategoryCard;
