
import React, { FC } from 'react'
import { Modal as ModalComponent } from 'flowbite-react'
interface ModalProps {
    show: boolean,
    hideHandler: () => void,
    title:string,
    children:React.ReactElement
}

const Modal: FC<ModalProps> = ({
    show,
    hideHandler,
    title,
    children
}) => {
    return (
        <>
            <ModalComponent className='z-[999]' show={show} onClose={hideHandler}>
                <ModalComponent.Header className='text-center justify-center'>{title}</ModalComponent.Header>
                <ModalComponent.Body className='!pt-2'>
                 {children}
                </ModalComponent.Body> 
            </ModalComponent>
        </>
    )
}

export default Modal
