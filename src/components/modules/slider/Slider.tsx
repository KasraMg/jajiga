import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FC, ReactNode } from 'react';

 
type Breakpoints = {
    [key: number]: {
        slidesPerView: number,
        spaceBetween: number
    }
}
interface SliderProps {
    className?: string,
    breakPoints: Breakpoints,
    navigation:boolean,
    Card: React.ElementType,
    datas?: any
}


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
            className={`${className} mySwiper w-full mx-auto !px-6`}
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
