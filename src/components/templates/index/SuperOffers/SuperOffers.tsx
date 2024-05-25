import React from 'react';
import CitiesSelector from './components/CitiesSelector';
import Slider from '@/src/components/modules/slider/Slider';
import Card from '../SpecialAccommodations/components/Card';
const SuperOffers = () => {
    return (
        <div className='superOfferBg rounded-t-xl py-6 z-20 relative overflow-hidden'>
            <div className='Container mx-auto px-3 sm:!px-4  xl:!px-0'>
                <div className='flex items-baseline lg:justify-between mb-6 flex-col lg:flex-row justify-center  '>
                    <p className='text-2xl font-thin text-white w-full'>
                        تخفیف های سفر انگیز
                    </p>
                    <CitiesSelector />
                </div>
                <Slider
                    Card={Card}
                    navigation={true}
                    className='mySwiper w-full mx-auto  text-white  sm:!pl-6'
                    breakPoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default SuperOffers;
