import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import FoundingCouncilShowcaseCard from "./FoundingCouncilShowcaseCard";
import SectionTitle from "../../../components/SectionTitle";

const FoundingCouncilShowcase = () => {
  return (
    <>
      <SectionTitle title="Commentary of the Founding Council"></SectionTitle>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <div>
          <SwiperSlide>
            <FoundingCouncilShowcaseCard></FoundingCouncilShowcaseCard>
          </SwiperSlide>
          <SwiperSlide>
            <FoundingCouncilShowcaseCard></FoundingCouncilShowcaseCard>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default FoundingCouncilShowcase;
