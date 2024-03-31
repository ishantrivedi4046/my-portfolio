import Modal from "@/shared-resources/components/common/Modal";
import Image from "next/image";
import close from "../../../../../public/close.svg";

import { DetailsComponentConfig } from "./types";

interface ProjectDetailsModalProps extends DetailsComponentConfig {
  showModal: boolean;
  closeModal: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  showModal,
  closeModal,
  video,
  title,
  desc,
  features,
  tech,
  confidential,
}) => {
  return (
    <Modal
      isOpen={showModal}
      closeModal={closeModal}
      style={{
        content: {
          borderRadius: "1rem",
          padding: "0rem",
        },
      }}
    >
      <div className="w-[50vw] h-[90vh] relative">
        <Image
          src={close}
          alt="close icon"
          onClick={closeModal}
          className="w-6 h-6 cursor-pointer absolute top-6 right-6 z-10"
        />
        <video loop autoPlay muted>
          <source
            src={"../../../../../public/videos/emotag-commits.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
