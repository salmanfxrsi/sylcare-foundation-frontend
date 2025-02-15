import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import FoundingCouncilShowcaseCard from "./FoundingCouncilShowcaseCard";
import SectionTitle from "../../../components/SectionTitle";
import useVolunteers from "../../../hooks/useVolunteers";

const FoundingCouncilShowcase = () => {
  const [isLoading, volunteers] = useVolunteers();

  if (isLoading) return;

  return (
    <>
      <SectionTitle title="Insights from the Founding Council"></SectionTitle>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <div>
          {volunteers.map((volunteer) => (
            <SwiperSlide key={volunteer.volunteerId}>
              <FoundingCouncilShowcaseCard
                volunteer={volunteer}
              ></FoundingCouncilShowcaseCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default FoundingCouncilShowcase;
