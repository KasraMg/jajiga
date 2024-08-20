"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FC } from "react";
import { SliderProps } from "@/src/types/Slider.types";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider: FC<SliderProps> = ({
  Card,
  breakPoints,
  navigation,
  className,
  data,
}) => {
  return (
    <Swiper
      dir="rtl"
      navigation={navigation}
      spaceBetween={10}
      pagination={{
        enabled: false,
      }}
      rewind={true}
      className={`${className} mySwiper mx-auto w-full`}
      modules={[Navigation]}
      breakpoints={breakPoints}
    >
      {data ? (
        data.map((data: any) => (
          <SwiperSlide key={crypto.randomUUID()}>
            <Card data={data} />
          </SwiperSlide>
        ))
      ) : (
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
  );
};

export default Slider;
