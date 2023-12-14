import Slider from '@/src/components/modules/slider/Slider';
import React from 'react';

const Offers = () => {
    return (
        <div className='mt-4'>
            <p className='text-lg text-[#252a31] mb-1'>ویلاهای لوکس و مجلل</p>
            <p className='text-sm text-[#666] mb-1'>
                ویلاهای لوکس و لاکچری برای مشکل پسندها
            </p>
            <Slider />
        </div>
    );
};

export default Offers;
