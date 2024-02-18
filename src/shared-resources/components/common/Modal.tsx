import { ReactNode } from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  style?: Modal.Styles | undefined;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  style,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      ...(style?.content ?? {}),
    },
    overlay: {
      backgroundColor: "rgba(104, 102, 102, 0.64)",
      ...(style?.overlay ?? {}),
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div></div>
      {children}
    </Modal>
  );
};

export default ModalComponent;
