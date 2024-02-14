"use client"
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { GiSandsOfTime } from 'react-icons/gi'
import { IoCheckmark } from 'react-icons/io5'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'

interface StepperProps {
    active: number,
    className?: string
}
interface StepperData {
    title: string,
    id: number
}
const Stepper: FC<StepperProps> = ({ active, className }) => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    const [data, setData] = useState<StepperData[]>([
        { title: 'آدرس', id: 1 },
        { title: 'نقشه', id: 2 },
        { title: 'تصاویر اقامتگاه', id: 3 },
        { title: 'درباره اقامتگاه', id: 4 },
        { title: 'ظرفیت اقامتگاه', id: 5 },
        { title: 'امکانات', id: 6 },
        { title: 'ساعات تحویل و تخلیه', id: 7 },
        { title: 'اجاره بها', id: 8 },
        { title: 'مقررات اقامتگاه', id: 9 },
    ])

    return (
        <>
            <ul id='stepper' style={{ boxShadow: 'grey 0px 1px 3px 0px' }} className={` sticky top-[68px] flex-col gap-6 rounded-xl p-4  h-[450px] overflow-y-auto hidden md:!flex`}>
                {data && data.map(stepper => (
                    <Link href={`${active >= stepper.id && `/newRoom/step` + stepper.id}`} id='stepper_item' className={`${active < stepper.id && "pointer-events-none"} flex gap-3 items-center relative cursor-pointer`}>
                        <div className={`${active == stepper.id ? 'bg-[#333333] text-white' : 'text-[#33333] bg-white'} flex justify-center z-[9999] items-center w-9 h-9  px-3 py-1 rounded-[50%]  border-2 border-solid border-black`}>
                            {active == stepper.id ? <GiSandsOfTime className="text-2xl absolute" /> : (
                                <>
                                    {active > stepper.id ? <IoCheckmark className="text-2xl absolute" /> : <span className='pt-[2.5px]'>{stepper.id}</span>}
                                </>
                            )}
                        </div>
                        <p className='text-[#444444] text-sm font-vazir-light'>{stepper.title}</p>
                    </Link>
                ))}
            </ul>

            <Accordion placeholder={null} open={open === 1} className=' z-10 md:!hidden block' id={1 as any}>
                <AccordionHeader className='border-0' placeholder={null} onClick={() => handleOpen(1)}>
                    <ul id='stepper2' className={`${open !== 1 ? '!h-[420px] !overflow-y-scroll' : 'h-16'} w-full flex flex-col gap-6 overflow-hidden  pr-0 p-4`}>
                        {data && data.map(stepper => (
                            <Link href={`${active >= stepper.id && `/newRoom/step` + stepper.id}`} id='stepper_item' className={`${active < stepper.id && "pointer-events-none"} flex gap-3 items-center relative cursor-pointer`}>
                                <div className={`${active == stepper.id ? 'bg-[#333333] text-white' : 'text-[#33333] bg-white'} flex justify-center z-[9999] items-center w-9 h-9  px-3 py-1 rounded-[50%]  border-2 border-solid border-black`}>
                                    {active == stepper.id ? <GiSandsOfTime className="text-2xl absolute" /> : (
                                        <>
                                            {active > stepper.id ? <IoCheckmark className="text-2xl absolute" /> : <span className='pt-[2.5px] text-sm'>{stepper.id}</span>}
                                        </>
                                    )}
                                </div>
                                <p className='text-[#444444] text-sm font-vazir-light'>{stepper.title}</p>
                            </Link>
                        ))}
                    </ul>
                </AccordionHeader>

            </Accordion>
        </>

    )
}

export default Stepper
