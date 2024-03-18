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
            <div className="text-6xl font-medium text-center leading-tight">
              Your Ultimate <br />
              Development Partner
            </div>
          </div>
        }
        observeElementId="benefits-text"
      />
      <div className="w-full lg4:max-w-[60%] lg2:max-w-[70%] max-w-[82%] flex flex-wrap items-center justify-center gap-5 py-16 mt-10">
        <div className="w-[34rem] h-[20rem] rounded-2xl flex items-center justify-center gap-5">
          <div className="w-[48%] h-full rounded-2xl border border-white bg-black flex justify-center items-center">
            <div className="text-white text-center">
              <div className="mb-2">
                <span className="text-6xl">100</span>
                <span className="text-3xl">%</span>
              </div>
              <span className="!text-gray-300">passion</span>
            </div>
          </div>
          <div className="w-[48%] h-full rounded-2xl border border-white bg-black flex justify-center items-center">
            <div className="text-white text-center">
              <div className="mb-2">
                <span className="text-6xl">
                  3<sup className="text-3xl">+</sup>
                </span>
                <span className="text-3xl"> years</span>
              </div>
              <span className="!text-gray-300">experiance</span>
            </div>
          </div>
        </div>
        <div className="w-[34rem] h-[20rem] rounded-2xl border border-white flex flex-col items-center justify-center gap-6 p-16 bg-black">
          <div className="text-3xl">
            Working at the intersection of design and code.
          </div>
          <div className="text-gray-300">
            Say goodbye to the stressful back and forth with developers who
            don&apos;t have an eye for design and rely on someone who has the
            skills, experience, and enthusiasm to bring your visions to life the
            way they were intended.
          </div>
        </div>
        <div className="w-[69.25rem] h-[28rem] rounded-2xl border border-white bg-black flex justify-center">
          <div className="flex flex-col gap-2 w-[36%] pt-28">
            <div className="text-3xl">Responsive Development</div>
            <div className="text-gray-300 w-[80%]">
              Responsive Web design is the approach that suggests that design
              and development should respond to the user&apos;s behavior and
              environment based on screen size, platform and orientation. Should
              be standard nowadays, yet often not treated with care.
            </div>
          </div>
          <Image
            src={responsiveDesign}
            alt="responsive design png"
            className="w-[45%]"
          />
        </div>
        <div className="w-[34rem] h-[20rem] rounded-2xl overflow-hidden items-start border border-white bg-black flex flex-col justify-end gap-6 pl-16 pt-16">
          <div className="text-3xl text-start">Clean, efficient code.</div>
          <div className="bg-gray-dark rounded-l-2xl">
            <Image src={code} alt="code dummy image" />
          </div>
        </div>
        <div className="w-[34rem] h-[20rem] rounded-2xl items-start border border-white bg-black flex flex-col justify-center gap-6 px-12 pt-16">
          <div className="text-3xl text-start">Fast turnaround times.</div>
          <div className="h-48 w-full flex flex-col justify-start items-center bg-gradient-radial gap-4">
            <div className="text-gray-text-dark text-6xl line-through font-semibold opacity-15">
              Month
            </div>
            <div className="text-6xl bg-gradient-linear-text bg-clip-text text-transparent font-medium animate-bounce">
              Weeks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
