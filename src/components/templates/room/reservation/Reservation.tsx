import React from 'react'
import Button from '@/src/components/modules/button';
import { useState } from 'react';
import Select from 'react-select';
import { userCountOptions } from '@/src/utils/selectOptions'
import { SlInfo } from "react-icons/sl";
import Link from 'next/link'; 
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReservationModal from './components/ReservationModal';
const Reservation = () => {
    const [countSelectedOption, setCountSelectedOption] = useState<{ label: string; value: string[]; } | null>(null); 
    return (
        <>
            <div className='w-[33.33%] sticky top-[68px] hidden md:!block'>
                <div className='rounded-t-2xl py-[14px] px-4 bg-[#404040] flex items-center justify-between text-white'>
                    <p className='text-sm lg:!text-base'>نرخ هر شب از:</p>
                    <div className='flex'>
                        <p className='text-sm lg:!text-base'>1,450,000</p>
                        <p className='text-sm mr-1'>تومان</p>
                    </div>
                </div>
                <div className='rounded-b-2xl py-[14px] px-4 shadow-lg'>
                    <p className='text-sm text-[#252a31] mb-2 font-vazir font-light '>
                        تاریخ سفر
                    </p>
                    <div className='flex items-center rounded-lg border-[#d6d6d6] border justify-between py-2 px-5'>
                        <div className='text-[#bac7d5] text-sm'>
                            <p>تاریخ ورود</p>
                        </div>
                        <div className='bg-[#d6d6d6] w-[1px] min-h-[30px] after:content-[""] mx-2 inline-block'></div>
                        <div className='text-[#bac7d5] text-sm'>
                            <p>تاریخ خروج</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#252a31] mt-8 mb-2 font-vazir font-light '>
                        تعداد نفرات
                    </p>
                    <Select
                        defaultValue={countSelectedOption}
                        onChange={setCountSelectedOption as any}
                        isClearable={true}
                        className='lg:!w-full md:w-[200px] w-full  '
                        isRtl={true}
                        isSearchable={true}
                        options={userCountOptions as any}
                        placeholder={'تعداد نفرات را مشخص کنید'}
                    />
                    <Button
                        variant='yellow'
                        className='rounded-full w-full text-center mt-5'
                    >
                        <div className='flex items-baseline justify-center text-textGray mx-auto'>
                            <span>ثبت درخواست رزرو</span>
                            <span className='text-[10px]'>
                                (رایگان)
                            </span>
                        </div>
                    </Button>
                    <Link href={'/faq'}>
                        <Button className='w-full justify-center mt-5 border-[#00000028]' variant={"white"}>
                            <SlInfo />
                            راهنمای رزرو
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='block md:!hidden px-5 fixed bottom-16 w-full'>
                <div className='py-3 items-center rounded-lg px-2 bg-[#00000099] w-full flex text-white justify-between'>
                    <div>
                        <p className='text-xs'>هر شب از <span className='text-sm'>2,000,000</span> تومان </p>
                        <Link className='flex gap-2 text-sm flex-row-reverse items-center justify-end' href={'/faq'}>راهنمای رزرو <BsFillInfoCircleFill /> </Link>
                    </div>
                    <ReservationModal />
                </div>
            </div>

          
        </>
    )
}

export default Reservation
