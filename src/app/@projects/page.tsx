import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import { PROJECTS } from "./constant";
import ProjectsCardsSlider from "./swiper/cards-slider/ProjectsCardSlider";
import ProjectSlider from "./swiper/cover-flow-slider/ProjectSlider";

const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col max-w-[100vw] overflow-x-hidden items-center sm:pt-[8.75rem] pb-24"
      id="projects"
    >
      <AnimatedText
        textNode={
          <div id="projects-text">
            <div className="xxxxs:text-3xl surface-duo:text-4xl ipad-mini:text-6xl font-medium text-center leading-tight">
              A small selection <br />
              of my work
            </div>
          </div>
        }
        observeElementId="projects-text"
      />
      <div className="mt-10 py-8 surface-duo:block hidden coverflow-slides-container">
        <ProjectSlider items={PROJECTS} />
      </div>
      <div className="mt-10 py-8 surface-duo:hidden cards-container">
        <ProjectsCardsSlider items={PROJECTS} />
      </div>
    </div>
  );
};

export default ProjectsPage;
