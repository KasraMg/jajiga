import React from 'react';
import CitiesSelector from './components/CitiesSelector';
import Slider from '@/src/components/modules/slider/Slider';
import Card from '../SpecialAccommodations/components/Card';
const SuperOffers = () => {
    return (
        <div className='superOfferBg rounded-t-xl py-6'>
            <div className='container mx-auto'>
                <div className='flex items-center lg:justify-between mb-4 flex-col lg:flex-row justify-center'>
                    <p className='text-2xl font-thin text-white'>
                        تخفیف های سفر انگیز
                    </p>
                    <CitiesSelector />
                </div>
                <Slider
                    Card={Card}
                    navigation={true}
                    className='mySwiper w-full mx-auto !pr-6'
                    breakPoints={{
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
