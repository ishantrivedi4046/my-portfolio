import Image from "next/image";
import myPic from "../../../public/potfolio.png";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-stretch">
      <div className="flex sm:flex-row flex-col sm:h-fit xs:h-[65%] surface-duo:h-[80%] ipad-mini:h-[60%] h-full lg6:justify-center xs:justify-between justify-evenly items-center relative clip-path">
        <div className="sm:w-[50%] ipad-mini:w-[70%] w-full flex items-center justify-end ">
          <div className="flex flex-col items-end">
            <div className="lg6:text-[4rem] lg6:leading-[5rem] md:text-[3.35rem] md:leading-[3.85rem] xs:text-[2.15rem] xs:leading-[2.65rem] text-[1.75rem] leading-9 font-semibold sm:text-start text-center w-full">
              Not Your Average Software Developer
            </div>
            <div className="xs:text-xl xxxs:text-lg text-base text-gray-500 font-medium mt-2 sm:text-start text-center w-full">
              I build pixel-perfect, accessible products for{" "}
              <br className="hidden md:block" />
              the web and beyond.
            </div>
          </div>
        </div>
        <div className="sm:w-[45%] w-full relative flex items-center justify-center">
          <div className="bg-gradient-conic blur-[12rem] absolute left-0 right-0 top-0 h-full my-auto mx-auto" />
          <Image
            src={myPic}
            alt="Picture of the author"
            className="z-20 rounded-2xl sm:w-[31.25rem] w-[20rem]"
          />
        </div>
        <div className="absolute bottom-0 z-20 h-[40%] bg-gradient-linear w-[125%]" />
      </div>
    </div>
  );
};

export default page;
