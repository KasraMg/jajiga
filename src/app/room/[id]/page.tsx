'use client';
import Badge from '@/src/components/modules/badge/Badge';
import Button from '@/src/components/modules/button';
import { useState } from 'react';
import Summery from '@/src/components/templates/room/summery/Summery';
import About from '@/src/components/templates/room/about/About';
import Container from '@/src/components/modules/container/Container';
import Gallery from '@/src/components/templates/room/gallery/Gallery';
import Breadcrumb from '@/src/components/templates/room/breadcrumb/Breadcrumb';
import Select from 'react-select';
import { userCountOptions } from '@/src/utils/selectOptions'
const Room = () => {
    const [countSelectedOption, setCountSelectedOption] = useState<{ label: string; value: string[]; } | null>(null);

    return (
        <Container>
            <div className='Container !mt-20'>
                <Gallery />
                <div className='flex items-start gap-8 mt-9'>
                    <div className='flex flex-col justify-between items-start w-[66.66%]'>
                        <div className='flex justify-between w-full mb-4'>
                            <div className='flex flex-col relative bottom-2'>
                                <Breadcrumb className='py-2 text-sm' city='شهریار' state='تهران' />
                                <p>اجاره ویلا استخردار در رامسر</p>
                                <div className='flex mt-5 gap-x-1'>
                                    <Badge bgColor='bg-yellow-300'>
                                        کد:303030
                                    </Badge>
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
                        <Summery />
                        <About />
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
                            <Select
                                defaultValue={countSelectedOption}
                                onChange={setCountSelectedOption as any}
                                isClearable={true}
                                className='lg:!w-full md:w-[200px] w-full'
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
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Room;
