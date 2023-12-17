import Button from '@/src/components/modules/button';
import React from 'react';

const BecomeHost = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between becomeHostBg rounded-2xl mt-8'>
            <div className='mr-4 space-y-4 w-1/2'>
                <p className='text-lg text-[#252a31] text-center md:text-start'>
                    میزبان شوید
                </p>
                <p className='text-[#404040] text-xs'>
                    میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز
                    خود را با شرایطی منصفانه به گردشگران اجاره میدهند و درآمدی
                    شرافتمندانه کسب میکنند
                </p>
                <Button variant="outlineMain" className=''>توضیحات بیشتر</Button>
            </div>

            <div className='w-full md:w-1/2'>
                <img
                    src='/images/becomeHost.jpg'
                    alt=''
                    className='rounded-2xl w-full'
                />
            </div>
        </div>
    );
};

export default BecomeHost;
