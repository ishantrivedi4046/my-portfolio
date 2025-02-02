import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import Image from "next/image";
import code from "../../../public/code.png";
import responsiveDesign from "../../../public/responsive-design.png";

const Benefits = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-br from-black to-purple-900 flex flex-col items-center pt-[8.75rem] pb-24 text-white"
    >
      <AnimatedText
        textNode={
          <div id="benefits-text">
            <div className="xxxxs:text-3xl surface-duo:text-4xl ipad-mini:text-6xl font-medium text-center leading-tight">
              Your Ultimate <br />
              Development Partner
            </div>
          </div>
        }
        observeElementId="benefits-text"
      />
      <div className="w-full lg5:max-w-[60%] lg4:max-w-[85%] max-w-[88%] flex flex-wrap items-center justify-center gap-5 py-16 mt-10">
        <div className="sm:w-[34rem] sm:h-[20rem] w-full h-[12rem] rounded-2xl flex  items-center justify-center gap-5">
          <div className="w-[48%] h-full rounded-2xl border border-white bg-black flex justify-center items-center">
            <div className="text-white text-center">
              <div className="mb-2">
                <span className="xxxxs:text-4xl ipad-mini:text-6xl">100</span>
                <span className="sm:text-3xl text-lg">%</span>
              </div>
              <span className="!text-gray-300">passion</span>
            </div>
          </div>
          <div className="w-[48%] h-full rounded-2xl border border-white bg-black flex justify-center items-center">
            <div className="text-white text-center">
              <div className="mb-2">
                <span className="xxxxs:text-4xl ipad-mini:text-6xl">
                  3<sup className="sm:text-3xl text-lg">+</sup>
                </span>
                <span className="sm:text-3xl text-lg"> years</span>
              </div>
              <span className="!text-gray-300">experiance</span>
            </div>
          </div>
        </div>
        <div className="sm:w-[34rem] h-[20rem] w-full rounded-2xl border border-white flex flex-col sm:items-center justify-center gap-6 sm:p-16 p-6 bg-black">
          <div className="sm:text-3xl text-start text-xl">
            Working at the intersection of design and code.
          </div>
          <div className="text-gray-300">
            Say goodbye to the stressful back and forth with developers who
            don&apos;t have an eye for design and rely on someone who has the
            skills, experience, and enthusiasm to bring your visions to life the
            way they were intended.
          </div>
        </div>
        <div className="md:w-[69.25rem] sm:w-[34rem] w-full md:h-[28rem] h-[20rem] rounded-2xl border border-white bg-black flex justify-center">
          <div className="flex flex-col gap-4 md:w-[36%] p-6 sm:p-16 md:p-0 w-full md:pt-28 justify-center sm:justify-start items-start">
            <div className="sm:text-3xl text-xl">Responsive Development</div>
            <div className="text-gray-300 sm:w-[80%]">
              Responsive Web design is the approach that suggests that design
              and development should respond to the user&apos;s behavior and
              environment based on screen size, platform and orientation. Should
              be standard nowadays, yet often not treated with care.
            </div>
          </div>
          <Image
            src={responsiveDesign}
            alt="responsive design png"
            className="w-[45%] hidden md:inline"
          />
        </div>
        <div className="sm:w-[34rem] sm:h-[20rem] w-full h-[18rem] rounded-2xl overflow-hidden items-start border border-white bg-black flex flex-col sm:justify-end justify-between gap-6 sm:pl-16 sm:pt-16 pl-8 pt-8">
          <div className="sm:text-3xl text-2xl text-start sm:mt-0 mt-6">
            Clean, efficient code.
          </div>
          <div className="bg-gray-dark rounded-l-2xl">
            <Image src={code} alt="code dummy image" />
          </div>
        </div>
        <div className="sm:w-[34rem] sm:h-[20rem] w-full h-[18rem] rounded-2xl items-start border border-white bg-black flex flex-col justify-center gap-6 sm:px-12 sm:pt-16 px-8 pt-12">
          <div className="sm:text-3xl text-2xl text-start">
            Fast turnaround times.
          </div>
          <div className="h-48 w-full flex flex-col justify-start items-center bg-gradient-radial sm:gap-4 gap-2">
            <div className="text-gray-text-dark sm:text-6xl text-[2.75rem] line-through font-semibold opacity-15">
              Month
            </div>
            <div className="sm:text-6xl text-[2.75rem] bg-gradient-linear-text bg-clip-text text-transparent font-medium animate-bounce">
              Weeks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
