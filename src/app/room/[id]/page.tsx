'use client';
import Navbar from '@/src/components/modules/navbar/Navbar';
import Footer from '@/src/components/modules/Footer/Footer';
import Badge from '@/src/components/modules/badge/Badge';
import Breadcrumb from '@/src/components/modules/breadcrumb/Breadcrumb';
import Button from '@/src/components/modules/button';
import { useState } from 'react';
const Room = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const handleShow = () => {
        setIsShow((prev) => !prev);
    };
    return (
        <>
            <Navbar />
            <div className='Container !mt-20'>
                <div className='flex gap-x-3 mb-4'>
                    <div className='w-1/2'>
                        <img
                            src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                            alt=''
                            className='w-full rounded-lg !object-contain'
                        />
                    </div>
                    <div className='grid gap-3 grid-cols-2 w-1/2'>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                        <div>
                            <img
                                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                                alt=''
                                className='w-full rounded-lg'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-start gap-4'>
                    <div className='flex justify-between items-start w-[66.66%]'>
                        <div className='flex flex-col'>
                            <Breadcrumb routes={['مازندران', 'رامسر']} />
                            <p>اجاره ویلا استخردار در رامسر</p>
                            <div className='flex mt-5 gap-x-1'>
                                <Badge bgColor='bg-yellow-300'>کد:303030</Badge>
                                <Badge bgColor='bg-[#f1f1f1]'>
                                    +300 رزرو موفق
                                </Badge>
                                {/* stars component */}
                            </div>
                        </div>
                        <div className='w-[72px] h-[72px]'>
                            <img
                                src='https://storage.jajiga.com/public/avatar/small/1910012115521179193.jpg'
                                alt=''
                                className='w-full h-full rounded-full'
                            />
                        </div>
                    </div>
                    <div className='w-[33.33%]'>
                        <div className='rounded-t-2xl py-[14px] px-4 bg-[#404040] flex items-center justify-between text-white'>
                            <p>نرخ هر شب از:</p>
                            <div className='flex'>
                                <p>1,450,000</p>
                                <p className='text-sm mr-1'>تومان</p>
                            </div>
                        </div>
                        <div className='rounded-b-2xl py-[14px] px-4 shadow-lg'>
                            <p className='text-sm text-[#252a31] mb-2 font-vazir-light'>
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
                            <p className='text-sm text-[#252a31] mt-8 mb-2 font-vazir-light'>
                                تعداد نفرات
                            </p>
                            <div className='relative'>
                                <input
                                    // tabindex='-1'
                                    // unselectable=''
                                    readOnly
                                    // focusable='false'
                                    onClick={handleShow}
                                    type='text'
                                    placeholder='تعداد نفرات را مشخص کنید'
                                    className='rounded-lg border-[#d6d6d6] border justify-between p-2 w-full placeholder:text-[#bac7d5] placeholder:text-sm cursor-pointer'
                                />
                                <span className='text-[#484848] text-xs'>
                                    تا 1 کودک زیر 5 سال در صورتحساب لحاظ نمی
                                    گردد
                                </span>
                                <div
                                    className={`flex-col absolute top-0 shadow-lg w-full bg-white divide-y divide-[#eff2f5] px-1 py-2 rounded-md ${
                                        isShow ? 'flex' : 'hidden'
                                    }`}
                                >
                                    <p className='p-3 hover:bg-[#F4F7F9] duration-300 cursor-pointer'>
                                        1 نفر
                                    </p>
                                    <p className='p-3 hover:bg-[#F4F7F9] duration-300 cursor-pointer'>
                                        2 نفر
                                    </p>
                                    <p className='p-3 hover:bg-[#F4F7F9] duration-300 cursor-pointer'>
                                        3 نفر
                                    </p>
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Room;
