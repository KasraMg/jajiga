import React from 'react';

const BecomeHost = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between bg-yellow-300 becomeHostBg rounded-2xl'>
            <div className='mr-4 space-y-4'>
                <p className='text-lg text-[#252a31] text-center md:text-start'>
                    میزبان شوید
                </p>
                <p className='text-[#404040] text-xs'>
                    میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز
                    خود را با شرایطی منصفانه به گردشگران اجاره میدهند و درآمدی
                    شرافتمندانه کسب میکنند
                </p>
                <button className=''>توضیحات بیشتر</button>
            </div>

            <div>
                <img
                    src='/images/becomeHost.jpg'
                    alt=''
                    className='rounded-2xl'
                />
            </div>
        </div>
    );
};

export default BecomeHost;
