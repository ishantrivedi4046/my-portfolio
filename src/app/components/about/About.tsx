"use client";

import AnimatedLinkText from "@/shared-resources/components/animated/link/AnimatedLinkText";
import Modal from "@/shared-resources/components/common/Modal";
import Image from "next/image";
import { useState } from "react";
import myPic from "../../../../public/potfolio.png";
import mySign from "../../../../public/sign.png";

const About = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <AnimatedLinkText title="About" />
      </div>
      <Modal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        style={{
          content: {
            backgroundColor: "#f9f8f8",
            borderRadius: "1rem",
            padding: "0rem",
          },
        }}
      >
        <div className="w-[28vw] h-[80vh] bg-gray-200 relative overflow-clip">
          <Image
            src={myPic}
            alt="Picture of the author"
            className="absolute right-[-50%] bottom-0"
          />
          <div className="w-[70%] absolute bottom-[-8%] bg-gray-200 blur-xl left-0 h-[50%]" />
          <Image
            src={mySign}
            alt="Sign of the author"
            className="absolute bottom-8 left-6 z-20 w-[14rem]"
          />
        </div>
      </Modal>
    </>
  );
};

export default About;
