"use client"
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { GiSandsOfTime } from 'react-icons/gi'
import { IoCheckmark } from 'react-icons/io5'

interface StepperProps {
    active: number
}
interface StepperData {
    title: string,
    id: number
}
const Stepper: FC<StepperProps> = ({ active }) => {
    const [data, setData] = useState<StepperData[]>([
        { title: 'آدرس', id: 1 },
        { title: 'نقشه', id: 2 },
        { title: 'تصاویر اقامتگاه', id: 3 },
        { title: 'درباره اقامتگاه', id: 4 },
        { title: 'ظرفیت اقامتگاه', id: 5 },
        { title: 'فضای خاب', id: 6 },
        { title: 'امکانات', id: 7 },
        { title: 'اقلام بهداشتی', id: 8 },
        { title: 'ساعات تحویل و تخلیه', id: 9 },
        { title: 'اجاره بها', id: 10 },
        { title: 'تخفیف مدت رزرو', id: 11 },
        { title: 'ایمنی', id: 12 },
        { title: 'مقررات اقامتگاه', id: 13 },
        { title: 'مقررات لغو رزرو', id: 14 },
        { title: 'مدارک مالکیت', id: 15 },
        { title: 'قوانین و مقررات جاجیگا', id: 16 },
    ])

    return (
        <ul id='stepper' style={{ boxShadow: 'grey 0px 1px 3px 0px' }} className=' sticky top-[68px]   flex flex-col gap-6 rounded-xl p-4 min-w-[268px] h-[480px] overflow-y-auto'>
            {data && data.map(stepper => (
                <Link href={`${active > stepper.id && `/newRoom/step` + stepper.id}`} id='stepper_item' className={`${active < stepper.id && "pointer-events-none"} flex gap-3 items-center relative cursor-pointer`}>
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
    )
}

export default Stepper
