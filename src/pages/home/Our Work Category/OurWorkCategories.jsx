import clean from "../../../assets/support category/clean.jpg";
import help from "../../../assets/support category/help.jpg";
import study from "../../../assets/support category/study.jpg";
import voluntary from "../../../assets/support category/voluntary.jpg";
import WorkCategoryCard from "./WorkCategoryCard";

const OurWorkCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 ">
      <WorkCategoryCard
        image={clean}
        name="Clean And Recycle"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <WorkCategoryCard
        image={help}
        name="Collecting Fund"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <WorkCategoryCard
        image={study}
        name="Study Materials"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <WorkCategoryCard
        image={voluntary}
        name="Helping People"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default OurWorkCategories;
