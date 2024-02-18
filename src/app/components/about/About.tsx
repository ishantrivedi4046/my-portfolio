"use client";

import AnimatedLinkText from "@/shared-resources/components/animated/link/AnimatedLinkText";
import Modal from "@/shared-resources/components/common/Modal";
import Image from "next/image";
import { useState } from "react";
import close from "../../../../public/close.svg";
import myPic from "../../../../public/potfolio.png";
import mySign from "../../../../public/sign.png";

const About = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalClose = () => setShowModal(false);
  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <AnimatedLinkText title="About" />
      </div>
      <Modal
        isOpen={showModal}
        closeModal={handleModalClose}
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
            src={close}
            alt="close icon"
            onClick={handleModalClose}
            className="w-6 h-6 cursor-pointer absolute top-6 right-6"
          />
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
          <div className="absolute top-12 left-12 w-[62%]">
            <div className="text-3xl font-medium">About Ishan</div>
            <div className="mt-4 text-gray-500">
              My software development journey started when I was in college. I
              started it just to learn something new but immediately drawn in
              and understood it&apos;s full potential. After my first
              successfull deployment of android app on playstore I went all in
              the universe of software development.
              <br />
              <br />
              For the past 3 years, I&apos;ve been working full-time as an
              software developer with clients I could only dream of a while ago.
              I deeply care about honesty and transparency, it&apos;s at the
              center of everything I do. I most enjoy building software in the
              sweet spot where design and engineering meet — things that look
              good but are also built well under the hood.
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default About;
