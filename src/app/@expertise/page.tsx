import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import ExpertiseScroller from "./ExpertiseScroller";

const Expertise = () => {
  return (
    <div id="expertise" className="flex flex-col items-center pt-[8.75rem]">
      <AnimatedText
        textNode={
          <div id="expertise-text">
            <div className="xxxxs:text-3xl surface-duo:text-4xl ipad-mini:text-6xl font-medium text-center leading-tight">
              What I Can Offer You
            </div>
          </div>
        }
        observeElementId="expertise-text"
      />
      <div className="w-full flex flex-col gap-12 justify-center items-center sm:pb-44 sm:pt-24 pb-32 pt-12 relative mt-10 clip-path">
        <div className="bg-gradient-conic blur-[12rem] absolute left-0 right-0 top-[20%] h-full my-auto mx-auto" />
        <ExpertiseScroller />
      </div>
    </div>
  );
};

export default Expertise;
