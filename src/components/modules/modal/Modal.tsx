
import React, { FC } from 'react'
import { Modal as ModalComponent } from 'flowbite-react'
interface ModalProps {
    show: boolean,
    hideHandler: () => void,
    title?: string,
    children: React.ReactElement
}

const Modal: FC<ModalProps> = ({
    show,
    hideHandler,
    title,
    children
}) => {
    return (
        <>
            <ModalComponent dismissible={true} className='z-[999] !overflow-x-hidden' show={show} onClose={hideHandler}>
                {title && <ModalComponent.Header className='text-center justify-center'>{title}</ModalComponent.Header>}
                <ModalComponent.Body>
                    {children}
                </ModalComponent.Body>
            </ModalComponent>
        </>
    )
}

export default Modal
