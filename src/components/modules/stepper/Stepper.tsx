"use client"
import React, { FC, useState } from 'react'

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
        { title: 'فضای اقامتگاه', id: 5 },
        { title: 'ظرفیت اقامتگاه', id: 6 },
        { title: 'فضای خاب', id: 7 },
        { title: 'امکانات', id: 8 },
        { title: 'اقلام بهداشتی', id: 9 },
        { title: 'ساعات تحویل و تخلیه', id: 10 },
        { title: 'اجاره بها', id: 11 },
        { title: 'تخفیف مدت رزرو', id: 12 },
        { title: 'ایمنی', id: 13 },
        { title: 'مقررات اقامتگاه', id: 14 },
        { title: 'مقررات لغو رزرو', id: 15 },
        { title: 'مدارک مالکیت', id: 16 },
        { title: 'قوانین و مقررات جاجیگا', id: 17 },
    ])

    return (
        <ul id='stepper' style={{ boxShadow: 'grey 0px 1px 3px 0px' }} className='flex flex-col gap-6 rounded-xl p-4 min-w-[268px] h-[480px] overflow-y-auto'>
            {data && data.map(stepper => (
                <li id='stepper_item' className='flex gap-3 items-center relative cursor-pointer'>
                    <div className={`${active == stepper.id ? 'bg-[#333333] text-white' : 'text-[#33333] bg-white'} flex justify-center z-[9999] items-center w-9 h-9  px-3 py-1 rounded-[50%]  border-2 border-solid border-black`}>
                        <span className='pt-[2.5px]'>{stepper.id}</span>
                    </div>
                    <p className='text-[#444444] text-sm font-vazir-light'>{stepper.title}</p>
                </li>
            ))}
        </ul>
    )
}

export default Stepper
