


import React, { FC, useState } from 'react'
import {
    Accordion as AccordionComponent,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


interface AccordionProps {
    className?: string,
    title: string,
    text: string,
    id: number
}

const Accordion: FC<AccordionProps> = ({
    className,
    title,
    text,
    id
}) => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    return (
        <AccordionComponent className={className} placeholder={null} open={open === id}>
            <AccordionHeader placeholder={null} className='font-vazir font-medium text-sm !font-normal' onClick={() => handleOpen(id)}>{title}</AccordionHeader>
            <AccordionBody className="text-[#404040] font-vazir font-light  text-sm  leading-6">
                {text}
            </AccordionBody>
        </AccordionComponent>

    )
}

export default Accordion

