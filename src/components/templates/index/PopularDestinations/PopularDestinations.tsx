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
                rewind={true}
                spaceBetween={0}
                navigation={true}
                modules={[Grid, Navigation]}
                className='PopularSwiper w-full h-[365px] mx-auto   !pl-8'
            >
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className='!h-[178px] !mx-auto'>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default PopularDestinations;
