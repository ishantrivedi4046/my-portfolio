import AnimatedCard from "@/shared-resources/components/animated/card/AnimatedCard";
import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import { DEVSLANE_SKILLS, GEEKS_FOR_GEEKS_SKILLS } from "./constant";

const WorkPage = () => {
  return (
    <div
      className="flex flex-col items-center xxxxs:pt-12 sm:pt-[8.75rem] pb-24"
      id="work"
    >
      <AnimatedText
        textNode={
          <div id="work-text">
            <div className="xxxxs:text-3xl surface-duo:text-4xl ipad-mini:text-6xl font-medium">
              My Work Experiance
            </div>
          </div>
        }
        observeElementId="work-text"
      />
      <div className="w-full flex flex-col items-center py-8 sm:py-16 mt-10 sm:gap-12 gap-8">
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
          wrapClassnames="w-full lg2:w-[80%] md:w-[90%]"
        >
          <div className="w-full h-[18rem] sm:h-[32rem] justify-between flex flex-row rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 sm:px-8 px-6 sm:py-12 py-6  text-white pointer-events-none">
            <div className="h-full w-1/3 font-semibold text-lg text-right md:block hidden">
              2021 - Present
            </div>
            <div className="md:h-full md:w-3/5 w-full flex flex-col items-start">
              <div className="font-semibold sm:text-2xl text-base">
                Software Developer - Devslane
              </div>
              <div className="w-full font-medium text-sm sm:text-lg mt-1 text-left md:hidden">
                2021 - Present
              </div>
              <div className="font-medium sm:text-lg text-sm mt-4">
                Build, style, and ship high-quality websites, desktop apps and
                mobile apps for a diverse array of projects for clients. Provide
                leadership within engineering department through close
                collaboration, knowledge shares, and spearheading the
                development of internal tools.
              </div>
              <div className="flex-wrap sm:gap-4 gap-3 hidden ipad-mini:flex w-full justify-start sm:mt-8 ipad-mini:mt-4">
                {DEVSLANE_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="font-medium sm:text-base text-sm sm:px-4 sm:py-2 p-2 border-white sm:border-[2px] border rounded-2xl flex justify-center items-center"
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
          wrapClassnames="w-full lg2:w-[80%] md:w-[90%]"
        >
          <div className="w-full h-[18rem] sm:h-[32rem] flex justify-between text-white rounded-2xl bg-gradient-to-br from-green-100 sm:px-8 px-6 sm:py-12 py-6 to-green-900 p-4 pointer-events-none">
            <div className="h-full w-1/3 font-semibold text-lg text-right md:block hidden">
              Dec 2019 - Apr 2020
            </div>
            <div className="md:h-full md:w-3/5 w-full flex flex-col items-start">
              <div className="font-semibold sm:text-2xl text-base">
                TCW Intern - GeeksForGeeks
              </div>
              <div className="w-full font-medium text-sm mt-1 sm:text-lg text-left md:hidden">
                Dec 2019 - Apr 2020
              </div>
              <div className="font-medium sm:text-lg text-sm mt-4">
                As a Technical Content Writer at GeeksforGeeks, I have written
                articles related to data structure and algorithms. This
                certainly enhanced my understanding of data structure and
                algortihms and improved my problem-solving skills.
              </div>
              <div className="flex-wrap sm:gap-4 gap-3 hidden ipad-mini:flex w-full justify-start sm:mt-8 ipad-mini:mt-4">
                {GEEKS_FOR_GEEKS_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="font-medium sm:text-base text-sm sm:px-4 sm:py-2 p-2 border-white sm:border-[2px] border rounded-2xl flex justify-center items-center"
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
