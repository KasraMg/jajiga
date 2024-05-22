import React, { FC } from "react";
import { Modal as ModalComponent } from "flowbite-react";
interface ModalProps {
  show: boolean;
  hideHandler: () => void;
  title?: string;
  children: React.ReactElement;
}

const Modal: FC<ModalProps> = ({ show, hideHandler, title, children }) => {
  return (
    <>
      <ModalComponent
        dismissible={true}
        className={`${
          !show ? "invisible scale-105" : "visible scale-100"
        } z-[999] transition-transform !overflow-x-hidden !bg-[#00000061]`}
        onClose={hideHandler}
        show={true}
      >
        {title && (
          <ModalComponent.Header className="text-center justify-center py-3">
            {title}
          </ModalComponent.Header>
        )}
        <ModalComponent.Body>{children}</ModalComponent.Body>
      </ModalComponent>
    </>
  );
};

export default Modal;

