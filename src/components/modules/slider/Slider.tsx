import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import VillaCard from './VillaCard';

export default function Slider() {
    return (
        <>
            <div className='text-right py-5'>
                <Swiper
                    dir='rtl'
                    navigation={true}
                    spaceBetween={0}
                    pagination={{
                        enabled: false,
                    }}
                    className='mySwiper w-full mx-auto !pr-6'
                    modules={[Navigation]}
                    breakpoints={{
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
                >
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <VillaCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
