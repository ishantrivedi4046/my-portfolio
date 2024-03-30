import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import CoverFlowSlider from "../components/swiper/cover-flow-slider/CoverFlowSlider";

const ProjectsPage = () => {
  return (
    <div
      className="flex flex-col items-center pt-[8.75rem] pb-24"
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
        <CoverFlowSlider
          items={[
            {
              backgroundGradiant: "bg-gradient-project-one",
              Component: "Slide",
            },
            {
              backgroundGradiant: "bg-gradient-project-two",
              Component: "",
            },
            {
              backgroundGradiant:
                "bg-gradient-to-br from-green-100 to-green-900",
              Component: "",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
