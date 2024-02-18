import Button from '@/src/components/modules/button';
import React from 'react';

const BecomeHost = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between becomeHostBg rounded-2xl mt-8'>
            <div className='mr-4 space-y-4 w-full md:!w-1/2 my-2'>
                <p className='text-lg text-[#252a31] text-center md:text-start lg:!mt-0 md:mt-5 mt-3'>
                    میزبان شوید
                </p>
                <p className='text-[#404040] text-xs px-4 md:!pl-2 md:!pr-0'>
                    میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز
                    خود را با شرایطی منصفانه به گردشگران اجاره میدهند و درآمدی
                    شرافتمندانه کسب میکنند
                </p>
                <Button  className='bg-[#404040] text-white rounded-full  px-3 text-xs block mx-auto relative top-6 md:!mt-4 !mt-0 md:!top-0 border-4 border-[#ffe666] border-solid md:!mr-0 md:!ml-auto '>توضیحات بیشتر</Button>
            </div>

            <div className='w-full md:w-1/2'>
                <img
                    src='/images/becomeHost.jpg'
                    alt=''
                    className='rounded-2xl w-full md:!h-[190px] lg:!h-[auto] h-[200px] object-cover'
                />
            </div>
        </div>
    );
};

export default BecomeHost;
