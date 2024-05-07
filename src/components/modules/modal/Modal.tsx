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
          !show ? "opacity-0 -translate-y-full" : "!opacity-100 !translate-y-full"
        } z-[999] transition-transform  !overflow-y-hidden`} 
        onClose={hideHandler}
        show={true}
      >
        {title && (
          <ModalComponent.Header className="text-center justify-center">
            {title}
          </ModalComponent.Header>
        )}
        <ModalComponent.Body>{children}</ModalComponent.Body>
      </ModalComponent>
    </>
  );
};

export default Modal;
