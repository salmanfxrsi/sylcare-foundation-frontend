const FoundingCouncilShowcaseCard = () => {
  return (
    <div className="p-16 rounded-xl bg-green-500 mx-6 cursor-grab">
      <p className="text-white font-black">
        CURE is a grassroots organization promoting community resilience and
        empowerment through education, advocacy, and support, aiming to create a
        more equitable and compassionate world for all members.CURE is a
        grassroots organization promoting community resilience and empowerment
        through education, advocacy, and support, aiming to create a more
        equitable and compassionate world for all members.CURE is a grassroots
        organization promoting community resilience and empowerment through
        education, advocacy, and support, aiming to create a more equitable and
        compassionate world for all members.CURE is a grassroots organization
        promoting community resilience and empowerment through education,
        advocacy, and support, aiming to create a more equitable and
        compassionate world for all members.
      </p>
      {/* Volunteer Info */}
      <div className="flex items-center gap-3 mt-6 justify-center">
        {/* Volunteer Image */}
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co.com/Vw70WRg/c0995056-b062-4ffe-b751-699219e5630f.jpg"
            alt=""
          />
        </div>
        {/* Volunteer Identity */}
        <div>
          <h1 className="text-white font-bold">Shimul Talukdar</h1>
          <h5 className="text-white font-medium">Chairman And Founder</h5>
        </div>
      </div>
    </div>
  );
};

export default FoundingCouncilShowcaseCard;
