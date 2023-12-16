import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';

import Card from './components/Card/Card';
const PopularDestinations = () => {
    return (
        <section className=' text-right py-5'>
            <p className='text-black text-xl mb-5'>مقاصد پر طرفدار</p>
            <Swiper
                dir='rtl'
                slidesPerView={4}
                grid={{
                    rows: 2,
                }}
                breakpoints={{ 
                    320:{
                        slidesPerView:2,
                        spaceBetween:0
                    },
                    768: {
                        slidesPerView:4,
                        spaceBetween:0
                    }, 
                    1024: {
                        slidesPerView:4,
                        spaceBetween:0
                    }
                }}
                rewind={true}
                spaceBetween={0}
                navigation={true}
                modules={[Grid, Navigation]}
                className='PopularSwiper w-full !h-[230px] sm:!h-[260px] lg:!h-[365px] mx-auto    sm:!pl-8'
            >
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='lg:!h-[178px] !h-[110px] sm:!h-[123px] !mx-auto'>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PopularDestinations;
