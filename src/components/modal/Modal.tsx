import React, { ReactNode } from "react";
import Title from "../typography/Title";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[999] backdrop-blur-[2px] flex items-center justify-center ${
        isOpen ? "translate-y-0" : "translate-y-[100%] delay-500"
      }`}
    >
      <div
        className={`absolute inset-0 z-[999] bg-[#0000009c] transition-opacity duration-500 delay-100 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      ></div>

      <div
        className={`relative shadow-modal bg-[#1F252C] z-[9999] rounded-lg max-w-[90%] mx-auto  overflow-y-auto
        transition-all duration-300 delay-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        } p-4 flex flex-col items-center justify-center ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
