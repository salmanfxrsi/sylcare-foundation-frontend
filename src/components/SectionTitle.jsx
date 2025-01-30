import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center mb-12">
      <h1 className="text-3xl font-black uppercase text-gray-600">{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
