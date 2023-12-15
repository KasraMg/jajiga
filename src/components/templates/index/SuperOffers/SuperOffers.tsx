import React from 'react';
import CitiesSelector from './components/CitiesSelector';
import Slider from '@/src/components/modules/slider/Slider';
import Card from '../Offers/components/card/Card';
const SuperOffers = () => {
    return (
        <div className='superOfferBg rounded-t-xl py-6 z-20 relative'>
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
                />
            </div>
        </div>
    );
};

export default SuperOffers;
