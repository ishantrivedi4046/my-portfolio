import AnimatedText from "@/shared-resources/components/animated/text/AnimatedText";
import Image from "next/image";
import { EXPERTISE_ROW_ONE, EXPERTISE_ROW_TWO } from "./constant";

const Expertise = () => {
  return (
    <div id="expertise" className="flex flex-col items-center pt-[8.75rem]">
      <AnimatedText
        textNode={
          <div id="expertise-text">
            <div className="text-6xl font-medium text-center leading-tight">
              What I Can Offer You
            </div>
          </div>
        }
        observeElementId="expertise-text"
      />
      <div className="w-full flex flex-col gap-12 items-center pb-44 pt-24 relative mt-10 clip-path">
        <div className="bg-gradient-conic blur-[12rem] absolute left-0 right-0 top-[20%] h-full my-auto mx-auto" />
        <div className="w-full inline-flex flex-nowrap relative">
          <ul className="flex justify-center items-center gap-8 animate-infinite-scroll-left">
            {EXPERTISE_ROW_ONE.map(({ image, alt }) => (
              <li
                key={alt}
                className="flex flex-col items-center gap-4 justify-center w-64 h-64 bg-white rounded-xl drop-shadow-md "
              >
                <Image src={image} alt={alt} />
                <div className=" text-xl">{alt}</div>
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center gap-8 animate-infinite-scroll-left ml-8"
            aria-hidden="true"
          >
            {EXPERTISE_ROW_ONE.map(({ image, alt }) => (
              <li
                key={alt}
                className="flex flex-col items-center gap-4 justify-center w-64 h-64 bg-white rounded-xl drop-shadow-md"
              >
                <Image src={image} alt={alt} />
                <div className=" text-xl">{alt}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full inline-flex flex-nowrap">
          <ul
            className="flex justify-center items-center gap-8 animate-infinite-scroll-right mr-8"
            aria-hidden="true"
          >
            {EXPERTISE_ROW_TWO.map(({ image, alt }) => (
              <li
                key={alt}
                className="flex flex-col items-center gap-4 justify-center w-64 h-64 bg-white rounded-xl drop-shadow-md"
              >
                <Image src={image} alt={alt} />
                <div className=" text-xl">{alt}</div>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center items-center gap-8 animate-infinite-scroll-right">
            {EXPERTISE_ROW_TWO.map(({ image, alt }) => (
              <li
                key={alt}
                className="flex flex-col items-center gap-4 justify-center w-64 h-64 bg-white rounded-xl drop-shadow-md"
              >
                <Image src={image} alt={alt} />
                <div className=" text-xl">{alt}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
