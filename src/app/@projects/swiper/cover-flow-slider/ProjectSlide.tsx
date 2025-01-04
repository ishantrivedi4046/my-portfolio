import cx from "classnames";
import Image from "next/image";
import { useState } from "react";
import zoomIcon from "../../../../../public/zoom-out-map.svg";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { CoverFlowSlideType } from "./types";

interface SlideProps extends CoverFlowSlideType {
  activeSlide: boolean;
}

const Slide = ({
  backgroundGradiant,
  summary,
  activeSlide,
  details,
  imageContainerClassNames,
  zoomIconClassNames,
}: SlideProps) => {
  const [allowZoom, setAllowZoom] = useState<boolean>(false);
  const [showDetailedProject, setShowDetailedProject] =
    useState<boolean>(false);

  const handleShowDetailedProject = () => {
    setShowDetailedProject(!showDetailedProject);
  };

  return (
    <>
      <ProjectDetailsModal
        showModal={showDetailedProject}
        closeModal={handleShowDetailedProject}
        {...details}
      />
      <div
        className={cx(
          "w-[48rem] h-[32rem] rounded-3xl flex flex-col items-center justify-end",
          backgroundGradiant
        )}
      >
        <div
          className={cx(
            "bg-white w-[84%] overflow-clip relative h-[88%] rounded-t-3xl flex justify-center items-center transition-all duration-250 ease-in-out",
            {
              "hover:w-[100%] hover:h-[100%] hover:drop-shadow-xl hover:rounded-3xl":
                !!activeSlide,
            },
            imageContainerClassNames
          )}
          onMouseEnter={() => setAllowZoom(true)}
          onMouseLeave={() => setAllowZoom(false)}
        >
          <Image
            onClick={handleShowDetailedProject}
            src={zoomIcon}
            alt={"zoom"}
            className={cx(
              "absolute right-10 top-10 z-20 opacity-0 transition-opacity duration-250 ease-in-out",
              { "opacity-100 text-white": allowZoom && activeSlide },
              zoomIconClassNames
            )}
          />
          {summary}
        </div>
      </div>
    </>
  );
};

export default Slide;
