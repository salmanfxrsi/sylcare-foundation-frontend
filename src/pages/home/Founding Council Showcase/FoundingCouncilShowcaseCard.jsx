const FoundingCouncilShowcaseCard = () => {
  return (
    <div className="p-16 rounded-xl bg-linear-to-b from-white to-[#9FDD3E] mx-6 cursor-grab">
      <p className="text-gray-600 font-medium font-sans">
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
          <h1 className="text-gray-600 font-bold">Shimul Talukdar</h1>
          <h5 className="text-gray-600 font-medium">Chairman And Founder</h5>
        </div>
      </div>
    </div>
  );
};

export default FoundingCouncilShowcaseCard;
