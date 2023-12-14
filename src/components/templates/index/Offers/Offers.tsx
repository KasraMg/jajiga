import React from 'react';
import Slider from '@/src/components/modules/slider/Slider';
import Card from '../SpecialAccommodations/components/Card'
const Offers = () => {
    return (
        <div className='mt-8'>
            <p className='text-lg text-[#252a31] mb-1'>ویلاهای لوکس و مجلل</p>
            <p className='text-sm text-[#666] mb-1'>
                ویلاهای لوکس و لاکچری برای مشکل پسندها
            </p>
            <Slider
                Card={Card}
                navigation={true}
                className='mySwiper w-full mx-auto !pr-6'
                breakPoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
            />{' '}
        </div>
    );
};

export default Offers;
