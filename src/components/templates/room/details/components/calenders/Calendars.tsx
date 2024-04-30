import React from 'react'
import DatePicker, { Calendar, DateObject } from 'react-multi-date-picker'
import { ChangeEvent, useState } from 'react';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import type { Value } from "react-multi-date-picker"
import { FaTrashAlt } from 'react-icons/fa';
import Button from '@/src/components/modules/button';
import { BsInfoCircle } from 'react-icons/bs';
import useDateHandler from '@/src/hooks/useDateHandler';


const Calendars = () => {
    const [value, setValue] = useState<any>()
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const date = useDateHandler()
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };


    function handleChange(value: DateObject | DateObject[] | null) {
        setValue(value)
    }
 
    const handleDelete = () => {
        // Check if any day is selected
        if (value?.length > 0) {
            // Clear the selected day
            setValue([]);
        }
    };

    return (
        <div className='w-full'>
            <h2 className='text-lg text-[#252a31] my-6 mb-4'>تقویم / نرخ</h2>
            <Calendar
                value={value}
                calendar={persian}
                locale={persian_fa}
                className="!w-full"
                numberOfMonths={window.innerWidth >= 500 ? 2 : 1}
                shadow={false}
                minDate={new Date()}
                onChange={handleChange}
                range
                mapDays={({ date }) => {
                    let props = {} as any
                    let isWeekend = [0, 6].includes(date.weekDay.index)
                    if (isWeekend) props.className = "highlight highlight-red"
                    return props
                }}
            />
            <div className='flex justify-between mt-4'>
                <div onClick={() => setShowMenu(true)} className='bg-[#8080801a] text-sm p-2 cursor-pointer border-0 flex gap-3 rounded-lg items-center'>
                    <BsInfoCircle />
                    راهنمای تقویم
                </div>

                <div onClick={handleDelete} className='border-dashed bg-white text-black border  rounded-xl text-sm font-medium transition-color w-fit px-3 cursor-pointer items-center justify-right border-black flex gap-2'>
                    <FaTrashAlt />
                    پاک کردن
                </div>

            </div>

            {showMenu && (
                <div onClick={() => setShowMenu(false)} className='fixed z-[999] top-0 w-full h-screen left-0 bg-[#00000094]'></div>
            )}
            <section dir='ltr' className={`${!showMenu ? 'translate-x-full ' : null} px-4 rounded-l-2xl py-4 right-0 fixed z-[9999] top-0 border-r  h-screen overflow-y-auto transition-transform  bg-white w-[90%] sm:!w-96 dark:bg-gray-800`}>
                <p className='border-b border-solid border-[#0000000f] text-lg pb-4 text-right'>راهنمای تقویم</p>
                <div className='flex gap-3 flex-row-reverse mt-8'>
                    <div className='border-2 border-solid rounded-lg text-center p-[3px] px-2 border-[#f0c807]'>
                        <p className='mb-0 text-sm mt-1'>{date?.slice(0,2)}</p>
                        <span className='text-[10px]'>200,000</span>
                    </div>
                    <div className='text-right'>
                        <p className=''>امروز</p>
                        <p className='font-vazir font-light  text-xs sm:!text-sm'>نشان دهنده تاریخ امروز در تقویم</p>
                    </div>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-8'>
                    <div className='  bg-[#0074d9]  rounded-lg text-center p-[3px] px-2 text-white border-[#00000018] border-solid border'>
                        <p className='mb-0 text-sm mt-1'>{date?.slice(0,2)}</p>
                        <span className='text-[10px]'>200,000</span>
                    </div>
                    <div className='text-right'>
                        <p className=''>تاریخ های رزرو</p>
                        <p className='font-vazir font-light  text-xs sm:!text-sm'>نشان دهنده تاریخ شروع و خاتمه رزرو</p>
                    </div>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-8'>
                    <div className='border border-solid rounded-lg text-center text-red-600 p-[3px] px-2 border-[#00000018]'>
                        <p className='mb-0 text-sm mt-1'>{date?.slice(0,2)}</p>
                        <span className='text-[10px]'>200,000</span>
                    </div>

                    <div className='text-right'>
                        <p className=''>تعطیلات</p>
                        <p className='font-vazir font-light  text-xs sm:!text-sm'> روزهای آخر هفته و تعطیلات</p>
                    </div>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-8'>
                    <div style={{ background: ' repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgba(215, 215, 215, 0.8) 0px, rgba(215, 215, 215, 0.8) 6px)' }} className='border border-solid rounded-lg text-center p-[3px] px-2 border-[#00000018]'>
                        <p className='mb-0 text-sm mt-1'>{date?.slice(0,2)}</p>
                        <span className='text-[10px]'>200,000</span>
                    </div>

                    <div className='text-right'>
                        <p className=''>روزهای پر شده</p>
                        <p className='font-vazir font-light  text-xs sm:!text-sm'>روزهایی که قبلا رزرو شده اند</p>
                    </div>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-8'>
                    <div className='border border-solid rounded-lg text-center p-[3px] text-gray-400 px-2 border-[#00000018]'>
                        <p className='mb-0 text-sm mt-1'>{date.slice(0,2)}</p>
                        <span className='text-[10px]'>200,000</span>
                    </div>

                    <div className='text-right'>
                        <p className=''>   روزهای گذشته</p>
                        <p className='font-vazir font-light  text-xs sm:!text-sm'>روزهایی سپری شده در تقویم</p>
                    </div>
                </div>
                <p className=' mt-48 text-center text-sm'>همه قیمت ها به تومان هستند</p>
            </section>
        </div>
    )
}

export default Calendars
