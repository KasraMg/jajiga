import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FC } from 'react';
import { SliderProps } from '@/src/types/Slider.types';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  
const Slider: FC<SliderProps> = ({
    Card,
    breakPoints,
    navigation,
    className,
    datas
}) => {
    return (
        <Swiper
            dir='rtl'
            navigation={navigation}
            spaceBetween={10}
            pagination={{
                enabled: false,
            }}
            rewind={true}
            className={`${className} mySwiper w-full mx-auto`}
            modules={[Navigation]}
            breakpoints={breakPoints}
        >
            {datas ? datas.map((data:any) => (
                <SwiperSlide key={crypto.randomUUID()}>
                    <Card {...data}/>
                </SwiperSlide>
            )) : (
                <>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card />
                    </SwiperSlide>
                    </>
            )}


        </Swiper>
    )
}

export default Slider
