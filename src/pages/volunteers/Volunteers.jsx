import useVolunteers from "../../hooks/useVolunteers";

const Volunteers = () => {
  const [isLoading, volunteers] = useVolunteers();
  console.log(volunteers);

  return <div></div>;
};

export default Volunteers;
