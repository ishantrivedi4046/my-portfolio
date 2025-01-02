import Modal from "@/shared-resources/components/common/Modal";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import appStoreImage from "../../../../../public/appStore.svg";
import googlePlayStoreImage from "../../../../../public/googlePlay.png";
import info from "../../../../../public/info.svg";
import { DetailsComponentConfig } from "./types";

interface ProjectDetailsModalProps extends DetailsComponentConfig {
  showModal: boolean;
  closeModal: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  showModal,
  closeModal,
  videoUrl,
  title,
  desc,
  features,
  githubLink,
  liveUrl,
  tech,
  confidential,
  playStoreLink,
  appStoreLink,
}) => {
  return (
    <Modal
      isOpen={showModal}
      closeModal={closeModal}
      style={{
        content: {
          borderRadius: "1rem",
          padding: "0rem",
          scrollbarWidth: "none",
        },
      }}
    >
      <div className="md:w-[50vw] w-[80vw] h-[90vh] relative no-scrollbar">
        <Suspense fallback="Loading...">
          <video
            src={videoUrl}
            autoPlay
            muted
            preload={"auto"}
            playsInline
            controls={false}
            loop
            width={"100%"}
          />
        </Suspense>
        <div className="flex flex-col justify-center items-center pt-16">
          <div className="text-5xl font-medium flex">{title}</div>
          <div className="text-gray-500 mt-6 w-[80%] text-center">{desc}</div>
          <div className="flex gap-4 mt-12">
            {!!githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="bg-black  text-white font-medium w-32 h-10 py-1 px-3 rounded-md flex justify-center items-center"
              >
                Open Github
              </Link>
            )}
            {!!liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="bg-blue-600 font-medium text-white w-40 h-10 py-1 px-3 rounded-md flex justify-center items-center"
              >
                Open Live Site
              </Link>
            )}
            {!!playStoreLink && (
              <Link href={playStoreLink} target="_blank">
                <Image
                  src={googlePlayStoreImage}
                  alt="google-play-store"
                  className="w-[11rem]"
                />
              </Link>
            )}
            {!!appStoreLink && (
              <Link href={appStoreLink} target="_blank">
                <Image
                  src={appStoreImage}
                  alt="app-store"
                  className="w-[10rem]"
                />
              </Link>
            )}
          </div>
          <div className="my-32 w-full">
            <div className="text-5xl font-medium mb-8 text-center ">
              Features
            </div>
            <div className="lg2:px-24 px-12 text-base text-gray-500 marker:text-black">
              {features.map((f) => (
                <li key={f} className="mb-1">
                  {f}
                </li>
              ))}
            </div>
          </div>
          <div className="mb-32 w-full">
            <div className="text-5xl font-medium mb-8 text-center ">
              Tech Stack
            </div>
            <div className="lg2:px-24 px-12 flex items-center flex-wrap gap-4">
              {tech.map((f) => (
                <div
                  key={f}
                  className=" bg-blue-600 font-medium text-white w-fit h-10 py-1 px-4 rounded-md flex justify-center items-center"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
          {confidential && (
            <div className="my-6 flex w-[90%] items-center justify-center">
              <Image src={info} alt="info" />
              <span className="ml-2">
                The live site for this project cannot be accessed due to
                confidentiality agreements with the client.{" "}
              </span>
            </div>
          )}
          <div className={cx("flex w-full items-center px-8 py-8 justify-end")}>
            <div className="text-gray-500">
              Press{" "}
              <span className="bg-gray-100 rounded-md px-2 py-1">esc</span> to
              close
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
