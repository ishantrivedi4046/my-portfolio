import AnimatedCard from "@/shared-resources/animated/card/AnimatedCard";
import AnimatedText from "@/shared-resources/animated/text/AnimatedText";
import { DEVSLANE_SKILLS, GEEKS_FOR_GEEKS_SKILLS } from "./constant";

const WorkPage = () => {
  return (
    <div className="flex flex-col items-center pt-[8.75rem] pb-24" id="work">
      <AnimatedText
        textNode={
          <div id="work-text">
            <div className="text-6xl font-medium">My Work Experiance</div>
          </div>
        }
        observeElementId="work-text"
      />
      <div className="w-full flex flex-col items-center py-16 gap-12">
        <AnimatedCard
          observedElementId="hidden__element"
          containerId="hidden__container"
          wrapClassnames="hidden"
        >
          <></>
        </AnimatedCard>
        <AnimatedCard
          observedElementId="devslane__element"
          containerId="devslane__container"
          wrapClassnames="w-[80%]"
        >
          <div className="w-full h-[32rem] justify-between flex rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 px-8 py-12 text-white pointer-events-none">
            <div className="h-full w-1/3 font-semibold text-lg text-right">
              2021 - Present
            </div>
            <div className="h-full w-3/5 flex flex-col items-start">
              <div className="font-semibold text-2xl">
                Software Developer - Devslane
              </div>
              <div className="font-medium text-lg mt-4">
                Build, style, and ship high-quality websites, desktop apps and
                mobile apps for a diverse array of projects for clients. Provide
                leadership within engineering department through close
                collaboration, knowledge shares, and spearheading the
                development of internal tools.
              </div>
              <div className="flex flex-wrap gap-4 justify-start mt-8">
                {DEVSLANE_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="font-medium px-4 py-2 border-white border-[2px] rounded-2xl flex justify-center items-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>
        <AnimatedCard
          observedElementId="geeksforgeeks__element"
          containerId="geeksforgeeks__container"
          wrapClassnames="w-[80%]"
        >
          <div className="w-full h-[32rem] flex justify-between text-white rounded-2xl bg-gradient-to-br from-green-100 px-8 py-12 to-green-900 p-4 pointer-events-none">
            <div className="h-full w-1/3 font-semibold text-lg text-right">
              Dec 2019 - Apr 2020
            </div>
            <div className="h-full w-3/5 flex flex-col items-start">
              <div className="font-semibold text-2xl">
                TCW Intern - GeeksForGeeks
              </div>
              <div className="font-medium text-lg mt-4">
                As a Technical Content Writer at GeeksforGeeks, I have written
                articles related to data structure and algorithms. This
                certainly enhanced my understanding of data structure and
                algortihms and improved my problem-solving skills.
              </div>
              <div className="flex flex-wrap gap-4 justify-start mt-8">
                {GEEKS_FOR_GEEKS_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="font-medium px-4 py-2 border-white border-[2px] rounded-2xl flex justify-center items-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default WorkPage;
