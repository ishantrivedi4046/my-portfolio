"use client";

import AnimatedLinkText from "@/shared-resources/components/animated/link/AnimatedLinkText";
import Modal from "@/shared-resources/components/common/Modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import close from "../../../../public/close.svg";
import gitlab from "../../../../public/gitlab.svg";
import instagram from "../../../../public/instagram.svg";
import linkedIn from "../../../../public/linkedin.svg";
import myPic from "../../../../public/potfolio.png";
import sendEmail from "../../../../public/send-email.svg";

const Contact = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalClose = () => setShowModal(false);
  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <AnimatedLinkText title="Contact" />
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
        <div className="w-[35rem] h-[44rem] bg-gray-200 flex flex-col items-center justify-center overflow-clip relative">
          <Image
            src={close}
            alt="close icon"
            onClick={handleModalClose}
            className="w-6 h-6 cursor-pointer absolute top-6 right-6 z-10"
          />
          <div className=" flex items-center flex-col h-[40%]">
            <div className="w-[8rem] h-[8rem] overflow-clip rounded-full border-2 border-solid border-gray-300">
              <Image src={myPic} alt="my avatar" />
            </div>
            <div className="text-4xl font-medium mt-4">
              Let&apos;s get started
            </div>
          </div>
          <Link
            target="_blank"
            href={
              "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=astrocoder8046@gmail.com&tf=1"
            }
            className="w-[80%] relative h-12 cursor-pointer animate-bounce hover:animate-none bg-gradient-to-r from-blue-600 to-blue-500 text-white flex justify-center items-center rounded-lg font-semibold"
          >
            Hire me
            <Image
              src={sendEmail}
              alt="send email"
              className="ml-2 absolute right-5"
            />
          </Link>
          <div className="flex items-center w-[75%] my-8">
            <div className="flex-1 border-t border-gray-400"></div>
            <span className="px-3 text-gray-500 ">Or</span>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
          <div className="flex justify-center items-center gap-7">
            <Link
              href={"https://www.instagram.com/astro.8046/"}
              target="_blank"
            >
              <Image
                src={instagram}
                alt="instagram"
                className="cursor-pointer"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ishan-trivedi-510026183/"}
              target="_blank"
            >
              <Image src={linkedIn} alt="linkedIn" className="cursor-pointer" />
            </Link>
            <Link href={"https://gitlab.com/ishantrivedi4046"} target="_blank">
              <Image src={gitlab} alt="gitlab" className="cursor-pointer" />
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Contact;
