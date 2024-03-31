import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import ProjectSlider from "./swiper/cover-flow-slider/ProjectSlider";

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
        <ProjectSlider
          items={[
            {
              backgroundGradiant: "bg-gradient-project-one",
              summary: "Slide 1",
              details: {
                video: "@/assets/videos/emotag-commits.mp4",
                title: "Emotag Commits",
                desc: "A CLI for creating commits with Git Emojis \n Let's celebrate each and every commit with a corresponding emoji!",
                features: [
                  "Easy and simple to use.",
                  "Generates emojified commits with a series of prompts",
                  "Supports semantic-release for common types : feat/fix/docs/refactor",
                  "Equipped with popular Git Emojis to cater your specific commit usecase.",
                  "Preview commit errors or success in colors.",
                ],
                tech: ["typescript", "@clack/prompts"],
                confidential: false,
              },
            },
            {
              backgroundGradiant: "bg-gradient-project-two",
              summary: "Slide 2",
              details: {
                video: "public/videos/emotag-commits.mp4",
                title: "Emotag Commits",
                desc: "A CLI for creating commits with Git Emojis \n Let's celebrate each and every commit with a corresponding emoji!",
                features: [
                  "Easy and simple to use.",
                  "Generates emojified commits with a series of prompts",
                  "Supports semantic-release for common types : feat/fix/docs/refactor",
                  "Equipped with popular Git Emojis to cater your specific commit usecase.",
                  "Preview commit errors or success in colors.",
                ],
                tech: ["typescript", "@clack/prompts"],
                confidential: false,
              },
            },
            {
              backgroundGradiant:
                "bg-gradient-to-br from-green-100 to-green-900",
              summary: "Slide 3",
              details: {
                video: "public/videos/emotag-commits.mp4",
                title: "Emotag Commits",
                desc: "A CLI for creating commits with Git Emojis \n Let's celebrate each and every commit with a corresponding emoji!",
                features: [
                  "Easy and simple to use.",
                  "Generates emojified commits with a series of prompts",
                  "Supports semantic-release for common types : feat/fix/docs/refactor",
                  "Equipped with popular Git Emojis to cater your specific commit usecase.",
                  "Preview commit errors or success in colors.",
                ],
                tech: ["typescript", "@clack/prompts"],
                confidential: false,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
