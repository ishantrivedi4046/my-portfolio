import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import { PROJECTS } from "./constant";
import ProjectSlider from "./swiper/cover-flow-slider/ProjectSlider";

const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col max-w-[100vw] overflow-x-hidden items-center pt-[8.75rem] pb-24"
      id="projects"
    >
      <AnimatedText
        textNode={
          <div id="projects-text">
            <div className="text-6xl font-medium text-center leading-tight">
              A small selection <br />
              of my work
            </div>
          </div>
        }
        observeElementId="projects-text"
      />
      <div className="mt-10 py-8">
        <ProjectSlider items={PROJECTS} />
      </div>
    </div>
  );
};

export default ProjectsPage;
