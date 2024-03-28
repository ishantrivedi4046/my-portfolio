import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";

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
    </div>
  );
};

export default ProjectsPage;
